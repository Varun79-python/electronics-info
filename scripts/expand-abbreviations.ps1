# Expand abbreviations in component-data.js — full expansion, no abbreviations retained
$file = "C:\resistor\electronics-hub\scripts\generate\component-data.js"
$content = Get-Content -Path $file -Raw

# Define replacements: Short form → Full expansion (no abbreviation retained)
$replacements = @{
    # Order matters — longer/more specific patterns first to avoid partial matches
    'Metal-Oxide-Semiconductor Field-Effect Transistor \(MOSFET\)' = 'Metal-Oxide-Semiconductor Field-Effect Transistor'
    'Insulated-Gate Bipolar Transistor \(IGBT\)' = 'Insulated-Gate Bipolar Transistor'
    'Junction Field-Effect Transistor \(JFET\)' = 'Junction Field-Effect Transistor'
    'Unijunction Transistor \(UJT\)' = 'Unijunction Transistor'
    'Silicon Controlled Rectifier \(SCR\)' = 'Silicon Controlled Rectifier'
    'Bipolar Junction Transistor \(BJT\)' = 'Bipolar Junction Transistor'
    'Field-Effect Transistor \(FET\)' = 'Field-Effect Transistor'
    'Complementary Metal-Oxide-Semiconductor \(CMOS\)' = 'Complementary Metal-Oxide-Semiconductor'
    'Transistor-Transistor Logic \(TTL\)' = 'Transistor-Transistor Logic'
    'Pulse Width Modulation \(PWM\)' = 'Pulse Width Modulation'
    'Electromagnetic Interference \(EMI\)' = 'Electromagnetic Interference'
    'Electromotive Force \(EMF\)' = 'Electromotive Force'
    'Analog-to-Digital Converter \(ADC\)' = 'Analog-to-Digital Converter'
    'Digital-to-Analog Converter \(DAC\)' = 'Digital-to-Analog Converter'
    'Microcontroller Unit \(MCU\)' = 'Microcontroller Unit'
    'Multiplexer \(MUX\)' = 'Multiplexer'
    'Demultiplexer \(DEMUX\)' = 'Demultiplexer'
    'Low Dropout \(LDO\)' = 'Low Dropout'
    'Light Dependent Resistor \(LDR\)' = 'Light Dependent Resistor'
    'Infrared \(IR\)' = 'Infrared'
    'Printed Circuit Board \(PCB\)' = 'Printed Circuit Board'
    'Alternating Current \(AC\)' = 'Alternating Current'
    'Direct Current \(DC\)' = 'Direct Current'
    'Integrated Circuit \(IC\)' = 'Integrated Circuit'
    'Triode for Alternating Current \(TRIAC\)' = 'Triode for Alternating Current'
    'Diode for Alternating Current \(DIAC\)' = 'Diode for Alternating Current'
}

# Also handle cases where ONLY the abbreviation exists (not already wrapped):
$abbrevReplacements = @{
    '\bMOSFET\b' = 'Metal-Oxide-Semiconductor Field-Effect Transistor'
    '\bIGBT\b' = 'Insulated-Gate Bipolar Transistor'
    '\bJFET\b' = 'Junction Field-Effect Transistor'
    '\bUJT\b' = 'Unijunction Transistor'
    '\bSCR\b' = 'Silicon Controlled Rectifier'
    '\bBJT\b' = 'Bipolar Junction Transistor'
    '\bCMOS\b' = 'Complementary Metal-Oxide-Semiconductor'
    '\bTTL\b' = 'Transistor-Transistor Logic'
    '\bPWM\b' = 'Pulse Width Modulation'
    '\bEMI\b' = 'Electromagnetic Interference'
    '\bEMF\b' = 'Electromotive Force'
    '\bADC\b' = 'Analog-to-Digital Converter'
    '\bDAC\b' = 'Digital-to-Analog Converter'
    '\bMCU\b' = 'Microcontroller Unit'
    '\bMUX\b' = 'Multiplexer'
    '\bDEMUX\b' = 'Demultiplexer'
    '\bLDO\b' = 'Low Dropout'
    '\bLDR\b' = 'Light Dependent Resistor'
    '\bIR\b' = 'Infrared'
    '\bPCB\b' = 'Printed Circuit Board'
    '\bAC\b' = 'Alternating Current'
    '\bDC\b' = 'Direct Current'
    '\bIC\b' = 'Integrated Circuit'
    '\bTRIAC\b' = 'Triode for Alternating Current'
    '\bDIAC\b' = 'Diode for Alternating Current'
}

# Step 1: Remove paren-abbreviation suffixes from already-replaced instances
$totalFixup = 0
foreach ($pattern in $replacements.Keys) {
    $replacement = $replacements[$pattern]
    $newContent = $content -replace $pattern, $replacement
    $count = [regex]::Matches($content, $pattern).Count
    if ($count -gt 0) {
        Write-Host "Fixup: $pattern -> $replacement : $count"
        $totalFixup += $count
    }
    $content = $newContent
}
Write-Host "Step 1 (parenthetical cleanup): $totalFixup"

# Step 2: Expand standalone abbreviations
$totalAbbrev = 0
foreach ($pattern in $abbrevReplacements.Keys) {
    $replacement = $abbrevReplacements[$pattern]
    $newContent = $content -replace $pattern, $replacement
    $count = [regex]::Matches($content, $pattern).Count
    if ($count -gt 0) {
        Write-Host "$pattern -> $replacement : $count"
        $totalAbbrev += $count
    }
    $content = $newContent
}
Write-Host "Step 2 (abbreviation expansion): $totalAbbrev"
Write-Host "Total: $($totalFixup + $totalAbbrev)"

# Save
Set-Content -Path $file -Value $content -NoNewline
Write-Host "Saved to $file"
