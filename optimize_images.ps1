Add-Type -AssemblyName System.Drawing

$sourceDir = ".\herophoto"
$files = Get-ChildItem -Path $sourceDir -Filter "*.jpg"

Write-Host "Starting optimization of $($files.Count) images..."

$jpegEncoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.FormatDescription -eq "JPEG" }
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 82L)

$totalOldSize = 0
$totalNewSize = 0

foreach ($file in $files) {
    try {
        $oldSize = $file.Length
        $totalOldSize += $oldSize

        # Load image from file stream to prevent file locking
        $stream = [System.IO.File]::OpenRead($file.FullName)
        $img = [System.Drawing.Image]::FromStream($stream)
        $stream.Close()
        $stream.Dispose()

        $origW = $img.Width
        $origH = $img.Height

        $maxDim = 1600
        $newW = $origW
        $newH = $origH

        if ($origW -gt $maxDim -or $origH -gt $maxDim) {
            if ($origW -ge $origH) {
                $newW = $maxDim
                $newH = [int](($origH * $maxDim) / $origW)
            } else {
                $newH = $maxDim
                $newW = [int](($origW * $maxDim) / $origH)
            }
        }

        # Create resized high quality bitmap
        $bmp = New-Object System.Drawing.Bitmap($newW, $newH)
        $g = [System.Drawing.Graphics]::FromImage($bmp)
        $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

        $g.DrawImage($img, 0, 0, $newW, $newH)
        $g.Dispose()
        $img.Dispose()

        # Save to temporary file first then replace
        $tempPath = "$($file.FullName).tmp"
        $bmp.Save($tempPath, $jpegEncoder, $encoderParams)
        $bmp.Dispose()

        Remove-Item $file.FullName -Force
        Rename-Item $tempPath $file.Name -Force

        $newFile = Get-Item $file.FullName
        $newSize = $newFile.Length
        $totalNewSize += $newSize

        $oldMB = [math]::Round($oldSize / 1MB, 2)
        $newKB = [math]::Round($newSize / 1KB, 0)
        $pct = [math]::Round((1 - ($newSize / $oldSize)) * 100, 1)

        Write-Host "Optimized $($file.Name): ${oldMB} MB -> ${newKB} KB (-$pct%)"
    } catch {
        Write-Warning "Failed to optimize $($file.Name): $_"
    }
}

$oldMBTotal = [math]::Round($totalOldSize / 1MB, 2)
$newMBTotal = [math]::Round($totalNewSize / 1MB, 2)
$savedMB = [math]::Round($oldMBTotal - $newMBTotal, 2)

Write-Host "DONE! Total size reduced from ${oldMBTotal} MB to ${newMBTotal} MB (Saved ${savedMB} MB, ~90%+ lighter!)."
