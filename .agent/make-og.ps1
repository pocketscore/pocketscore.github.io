Add-Type -AssemblyName System.Drawing

$w = 1200
$h = 630
$bmp = New-Object System.Drawing.Bitmap($w, $h)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

# Diagonal Material 3 purple gradient
$rect = New-Object System.Drawing.Rectangle(0, 0, $w, $h)
$c1 = [System.Drawing.ColorTranslator]::FromHtml('#21005D')
$c2 = [System.Drawing.ColorTranslator]::FromHtml('#6750A4')
$brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rect, $c1, $c2, 35.0)
$g.FillRectangle($brush, $rect)

# Soft decorative circles
$circleBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(28, 255, 255, 255))
$g.FillEllipse($circleBrush, 880, -180, 520, 520)
$g.FillEllipse($circleBrush, 980, 380, 360, 360)
$g.FillEllipse($circleBrush, -140, 430, 420, 420)

# Rounded app icon tile
$iconRect = New-Object System.Drawing.Rectangle(90, 120, 120, 120)
$iconPath = New-Object System.Drawing.Drawing2D.GraphicsPath
$r = 28
$iconPath.AddArc($iconRect.X, $iconRect.Y, $r, $r, 180, 90)
$iconPath.AddArc($iconRect.Right - $r, $iconRect.Y, $r, $r, 270, 90)
$iconPath.AddArc($iconRect.Right - $r, $iconRect.Bottom - $r, $r, $r, 0, 90)
$iconPath.AddArc($iconRect.X, $iconRect.Bottom - $r, $r, $r, 90, 90)
$iconPath.CloseFigure()
$iconBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(48, 255, 255, 255))
$g.FillPath($iconBrush, $iconPath)
$iconPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(120, 255, 255, 255), 3)
$g.DrawPath($iconPen, $iconPath)

$iconFont = New-Object System.Drawing.Font('Segoe UI', 52, [System.Drawing.FontStyle]::Bold)
$iconTextBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
$iconFormat = New-Object System.Drawing.StringFormat
$iconFormat.Alignment = [System.Drawing.StringAlignment]::Center
$iconFormat.LineAlignment = [System.Drawing.StringAlignment]::Center
$g.DrawString('P', $iconFont, $iconTextBrush, (New-Object System.Drawing.RectangleF(90, 120, 120, 120)), $iconFormat)

# Wordmark
$titleFont = New-Object System.Drawing.Font('Segoe UI', 86, [System.Drawing.FontStyle]::Bold)
$g.DrawString('PocketScore', $titleFont, $iconTextBrush, 90, 275)

# Subtitle
$subFont = New-Object System.Drawing.Font('Segoe UI', 38, [System.Drawing.FontStyle]::Regular)
$subBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(230, 234, 221, 255))
$g.DrawString('Smart scorekeeping for Android', $subFont, $subBrush, 94, 400)

# Accent bar
$accentBrush = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml('#D0BCFF'))
$g.FillRectangle($accentBrush, 94, 485, 120, 8)

# Footer pill text
$pillFont = New-Object System.Drawing.Font('Segoe UI', 26, [System.Drawing.FontStyle]::Regular)
$g.DrawString('Material 3 Expressive  |  pocketscore.github.io', $pillFont, $subBrush, 94, 525)

$out = Join-Path (Get-Location) 'public\og-image.png'
$bmp.Save($out, [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$bmp.Dispose()
Write-Output "Saved $out"
