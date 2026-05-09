// ========== MTHS 112 — MATRICES & SYSTEMS (30 Questions) ==========
(function(){const Q=[

// Q1: 2×2 elimination — add equations
{id:2001,topic:'Week 2: Matrix Reduction',
question:'Solve the system of equations using elimination:<br>$x + y = 7$<br>$2x - y = 5$',
markingCriteria:[
  {type:'contains',expected:['3x = 12','3x=12'],description:'Adds equations: 3x = 12',marks:1},
  {type:'value',expected:4,tolerance:0.01,description:'x = 4',marks:1},
  {type:'value',expected:3,tolerance:0.01,description:'y = 3',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>Add eq1 + eq2:</strong></div><div class="memo-line">$(@INPUT@ + @INPUT@)x + (y - y) = @INPUT@ + @INPUT@$</div><div class="memo-line">$@INPUT@x = @INPUT@$</div><div class="memo-line">$x = \\frac{@INPUT@}{@INPUT@} = @INPUT@$</div><div class="memo-line"><strong>Substitute into eq1:</strong></div><div class="memo-line">$@INPUT@ + y = @INPUT@$</div><div class="memo-line">$y = @INPUT@ - @INPUT@ = @INPUT@$</div><div class="memo-line"><strong>Solution:</strong> $(x, y) = (@INPUT@, @INPUT@)$</div>',
hardTemplate:'$(x, y) = (@INPUT@, @INPUT@)$',
memo:'<div class="memo-line"><strong>Add eq1 + eq2:</strong></div><div class="memo-line">$(1+2)x + (y-y) = 7+5$</div><div class="memo-line">$3x = 12$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$x = 4$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$4 + y = 7 \\Rightarrow y = 3$ <span class="memo-mark">✓(1)</span></div>'
},

// Q2: 2×2 substitution
{id:2002,topic:'Week 2: Matrix Reduction',
question:'Solve using substitution:<br>$3x + 2y = 16$<br>$x - y = 2$',
markingCriteria:[
  {type:'contains',expected:['x = 2 + y','x=2+y','x = y + 2'],description:'Isolates x = 2 + y',marks:1},
  {type:'value',expected:4,tolerance:0.01,description:'x = 4',marks:1},
  {type:'value',expected:2,tolerance:0.01,description:'y = 2',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>From eq2:</strong> $x = @INPUT@ + y$</div><div class="memo-line"><strong>Substitute into eq1:</strong></div><div class="memo-line">$3(@INPUT@ + y) + 2y = @INPUT@$</div><div class="memo-line">$@INPUT@ + @INPUT@y + @INPUT@y = @INPUT@$</div><div class="memo-line">$@INPUT@y = @INPUT@ - @INPUT@ = @INPUT@$</div><div class="memo-line">$y = \\frac{@INPUT@}{@INPUT@} = @INPUT@$</div><div class="memo-line">$x = @INPUT@ + @INPUT@ = @INPUT@$</div><div class="memo-line"><strong>Solution:</strong> $(x, y) = (@INPUT@, @INPUT@)$</div>',
hardTemplate:'$(x, y) = (@INPUT@, @INPUT@)$',
memo:'<div class="memo-line">$x = 2 + y$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$3(2+y) + 2y = 16 \\Rightarrow 6 + 5y = 16 \\Rightarrow y = 2$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$x = 2 + 2 = 4$ <span class="memo-mark">✓(1)</span></div>'
},

// Q3: 2×2 elimination — multiply first
{id:2003,topic:'Week 2: Matrix Reduction',
question:'Solve by elimination:<br>$5x + 3y = 31$<br>$2x + y = 12$',
markingCriteria:[
  {type:'contains',expected:['multiply','×3','× 3','3y'],description:'Multiplies eq2 by 3',marks:1},
  {type:'value',expected:5,tolerance:0.01,description:'x = 5',marks:1},
  {type:'value',expected:2,tolerance:0.01,description:'y = 2',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>Multiply eq2 by @INPUT@:</strong></div><div class="memo-line">$@INPUT@x + @INPUT@y = @INPUT@$ ... (eq2\')</div><div class="memo-line"><strong>Subtract eq2\' from eq1:</strong></div><div class="memo-line">$(@INPUT@ - @INPUT@)x = @INPUT@ - @INPUT@$</div><div class="memo-line">$-@INPUT@x = -@INPUT@$</div><div class="memo-line">$x = @INPUT@$</div><div class="memo-line"><strong>Substitute:</strong> $2(@INPUT@) + y = @INPUT@$</div><div class="memo-line">$y = @INPUT@ - @INPUT@ = @INPUT@$</div>',
hardTemplate:'$(x, y) = (@INPUT@, @INPUT@)$',
memo:'<div class="memo-line">$eq2 \\times 3: 6x + 3y = 36$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$eq1 - eq2\': -x = -5 \\Rightarrow x = 5$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$y = 12 - 10 = 2$ <span class="memo-mark">✓(1)</span></div>'
},

// Q4: 2×2 word problem — shop revenue
{id:2004,topic:'Week 2: Matrix Reduction',
question:'A shop sells chairs at R150 each and tables at R250 each. In one day, 20 items were sold for a total of R4 000. Set up and solve a system of equations to find how many chairs (x) and tables (y) were sold.',
markingCriteria:[
  {type:'contains',expected:['x + y = 20','x+y=20'],description:'Units: x + y = 20',marks:1},
  {type:'contains',expected:['150x + 250y','150x+250y'],description:'Revenue: 150x + 250y = 4000',marks:1},
  {type:'value',expected:10,tolerance:0.01,description:'x = 10 chairs',marks:1},
  {type:'value',expected:10,tolerance:0.01,description:'y = 10 tables',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>Set up equations:</strong></div><div class="memo-line">$x + y = @INPUT@$ ... (units sold)</div><div class="memo-line">$@INPUT@x + @INPUT@y = @INPUT@$ ... (revenue)</div><div class="memo-line"><strong>From eq1:</strong> $x = @INPUT@ - y$</div><div class="memo-line"><strong>Substitute:</strong></div><div class="memo-line">$@INPUT@(@INPUT@ - y) + @INPUT@y = @INPUT@$</div><div class="memo-line">$@INPUT@ - @INPUT@y + @INPUT@y = @INPUT@$</div><div class="memo-line">$@INPUT@y = @INPUT@ - @INPUT@ = @INPUT@$</div><div class="memo-line">$y = \\frac{@INPUT@}{@INPUT@} = @INPUT@$</div><div class="memo-line">$x = @INPUT@ - @INPUT@ = @INPUT@$</div><div class="memo-line"><strong>Answer:</strong> @INPUT@ chairs and @INPUT@ tables</div>',
hardTemplate:'Chairs: @INPUT@, Tables: @INPUT@',
memo:'<div class="memo-line">$x + y = 20$, $150x + 250y = 4000$ <span class="memo-mark">✓(2)</span></div><div class="memo-line">$150(20-y) + 250y = 4000 \\Rightarrow 100y = 1000 \\Rightarrow y = 10$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$x = 10$ <span class="memo-mark">✓(1)</span></div>'
},

// Q5: 3×3 Gaussian — clean (from 2024 exam style)
{id:2005,topic:'Week 2: Matrix Reduction',
question:'Solve using Gaussian elimination:<br>$x + 3y + 3z = 32$<br>$x + 4y + 3z = 37$<br>$x + 3y + 4z = 35$ <em>[7 marks]</em>',
markingCriteria:[
  {type:'contains',expected:['r2 - r1','r₂ - r₁','r2-r1'],description:'Row operation R₂ − R₁',marks:1},
  {type:'contains',expected:['r3 - r1','r₃ - r₁','r3-r1'],description:'Row operation R₃ − R₁',marks:1},
  {type:'value',expected:5,tolerance:0.01,description:'y = 5 (from R₂ − R₁)',marks:2},
  {type:'value',expected:3,tolerance:0.01,description:'z = 3 (from R₃ − R₁)',marks:1},
  {type:'value',expected:8,tolerance:0.01,description:'x = 8 (back-sub)',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>Augmented matrix:</strong></div><div class="memo-line">$\\begin{pmatrix} 1 & 3 & 3 & | & 32 \\\\ 1 & 4 & 3 & | & 37 \\\\ 1 & 3 & 4 & | & 35 \\end{pmatrix}$</div><div class="memo-line"><strong>R₂ − R₁ → R₂:</strong></div><div class="memo-line">$\\begin{pmatrix} 1 & 3 & 3 & | & 32 \\\\ 0 & @INPUT@ & @INPUT@ & | & @INPUT@ \\\\ 1 & 3 & 4 & | & 35 \\end{pmatrix}$</div><div class="memo-line"><strong>R₃ − R₁ → R₃:</strong></div><div class="memo-line">$\\begin{pmatrix} 1 & 3 & 3 & | & 32 \\\\ 0 & @INPUT@ & @INPUT@ & | & @INPUT@ \\\\ 0 & @INPUT@ & @INPUT@ & | & @INPUT@ \\end{pmatrix}$</div><div class="memo-line"><strong>Back-substitute:</strong></div><div class="memo-line">From R₂: $y = @INPUT@$</div><div class="memo-line">From R₃: $z = @INPUT@$</div><div class="memo-line">From R₁: $x + 3(@INPUT@) + 3(@INPUT@) = @INPUT@$</div><div class="memo-line">$x + @INPUT@ + @INPUT@ = @INPUT@$</div><div class="memo-line">$x = @INPUT@ - @INPUT@ = @INPUT@$</div>',
hardTemplate:'$(x, y, z) = (@INPUT@, @INPUT@, @INPUT@)$',
memo:'<div class="memo-line">$R_2-R_1$: $(0, 1, 0 | 5) \\Rightarrow y = 5$ <span class="memo-mark">✓(3)</span></div><div class="memo-line">$R_3-R_1$: $(0, 0, 1 | 3) \\Rightarrow z = 3$ <span class="memo-mark">✓(2)</span></div><div class="memo-line">$x = 32 - 15 - 9 = 8$ <span class="memo-mark">✓(2)</span></div>'
},

// Q6: Matrix multiplication — car dealer (from 2024 exam Q3)
{id:2006,topic:'Week 2: Matrix Reduction',
question:'A car dealer buys midsize cars at 12% below list, luxury cars at 15% below list.<br>$A = \\begin{pmatrix} 360000 & 420000 \\\\ 500000 & 560000 \\end{pmatrix}$ (list prices)<br>$B = \\begin{pmatrix} 0.88 & 0 \\\\ 0 & 0.85 \\end{pmatrix}$ (discount factors)<br><br>3.1 Determine $BA$. <em>[4 marks]</em><br>3.2 What does each entry represent? <em>[1 mark]</em>',
markingCriteria:[
  {type:'value',expected:316800,tolerance:0.5,description:'BA(1,1) = 0.88×360000 = 316800',marks:1},
  {type:'value',expected:369600,tolerance:0.5,description:'BA(1,2) = 0.88×420000 = 369600',marks:1},
  {type:'value',expected:425000,tolerance:0.5,description:'BA(2,1) = 0.85×500000 = 425000',marks:1},
  {type:'value',expected:476000,tolerance:0.5,description:'BA(2,2) = 0.85×560000 = 476000',marks:1},
  {type:'contains',expected:['dealer price','actual cost','discounted','purchase'],description:'Entries = dealer purchase prices',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>3.1 Compute BA:</strong></div><div class="memo-line">$BA_{11} = @INPUT@ \\times @INPUT@ + @INPUT@ \\times @INPUT@ = @INPUT@$</div><div class="memo-line">$BA_{12} = @INPUT@ \\times @INPUT@ + @INPUT@ \\times @INPUT@ = @INPUT@$</div><div class="memo-line">$BA_{21} = @INPUT@ \\times @INPUT@ + @INPUT@ \\times @INPUT@ = @INPUT@$</div><div class="memo-line">$BA_{22} = @INPUT@ \\times @INPUT@ + @INPUT@ \\times @INPUT@ = @INPUT@$</div><div class="memo-line">$BA = \\begin{pmatrix} @INPUT@ & @INPUT@ \\\\ @INPUT@ & @INPUT@ \\end{pmatrix}$</div><div class="memo-line"><strong>3.2</strong> Each entry represents the @INPUT@ price the dealer pays</div>',
hardTemplate:'$BA = \\begin{pmatrix} @INPUT@ & @INPUT@ \\\\ @INPUT@ & @INPUT@ \\end{pmatrix}$',
memo:'<div class="memo-line">$BA = \\begin{pmatrix} 316800 & 369600 \\\\ 425000 & 476000 \\end{pmatrix}$ <span class="memo-mark">✓(4)</span></div><div class="memo-line">Entries = dealer purchase prices <span class="memo-mark">✓(1)</span></div>'
},

// Q7: 3×3 Gaussian — investment portfolios (from 2024 exam Q2)
{id:2007,topic:'Week 2: Matrix Reduction',
question:'An investment firm offers portfolios A, B, C with risk units:<br><table class="data-table"><thead><tr><th></th><th>A</th><th>B</th><th>C</th></tr></thead><tbody><tr><td>High</td><td>2</td><td>4</td><td>1</td></tr><tr><td>Moderate</td><td>4</td><td>3</td><td>7</td></tr><tr><td>Low</td><td>2</td><td>1</td><td>3</td></tr></tbody></table>A client wants 77 High, 114 Moderate, 48 Low risk units. Use Gaussian elimination. <em>[7 marks]</em>',
markingCriteria:[
  {type:'contains',expected:['2a + 4b + c = 77','2a+4b+c=77'],description:'Sets up equation 1',marks:1},
  {type:'value',expected:7,tolerance:0.01,description:'A = 7',marks:2},
  {type:'value',expected:14,tolerance:0.01,description:'B = 14',marks:2},
  {type:'value',expected:5,tolerance:0.01,description:'C = 5',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>System:</strong></div><div class="memo-line">$@INPUT@A + @INPUT@B + @INPUT@C = @INPUT@$</div><div class="memo-line">$@INPUT@A + @INPUT@B + @INPUT@C = @INPUT@$</div><div class="memo-line">$@INPUT@A + @INPUT@B + @INPUT@C = @INPUT@$</div><div class="memo-line"><strong>Augmented matrix:</strong></div><div class="memo-line">$\\begin{pmatrix} @INPUT@ & @INPUT@ & @INPUT@ & | & @INPUT@ \\\\ @INPUT@ & @INPUT@ & @INPUT@ & | & @INPUT@ \\\\ @INPUT@ & @INPUT@ & @INPUT@ & | & @INPUT@ \\end{pmatrix}$</div><div class="memo-line"><strong>After row operations → row echelon form, back-substitute:</strong></div><div class="memo-line">$C = @INPUT@$</div><div class="memo-line">$B = @INPUT@$</div><div class="memo-line">$A = @INPUT@$</div>',
hardTemplate:'$(A, B, C) = (@INPUT@, @INPUT@, @INPUT@)$',
memo:'<div class="memo-line">System: 2A+4B+C=77, 4A+3B+7C=114, 2A+B+3C=48 <span class="memo-mark">✓(1)</span></div><div class="memo-line">Gaussian → A=7, B=14, C=5 <span class="memo-mark">✓(6)</span></div>'
},

// Q8: Determinant 2×2
{id:2008,topic:'Week 3: Matrix Algebra',
question:'Find $\\det(A)$ for $A = \\begin{pmatrix} 4 & 7 \\\\ 2 & 6 \\end{pmatrix}$.',
markingCriteria:[
  {type:'value',expected:10,tolerance:0.01,description:'det = 24 − 14 = 10',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>Formula:</strong> $\\det(A) = ad - bc$</div><div class="memo-line">$= (@INPUT@)(@INPUT@) - (@INPUT@)(@INPUT@)$</div><div class="memo-line">$= @INPUT@ - @INPUT@ = @INPUT@$</div>',
hardTemplate:'$\\det(A) = @INPUT@$',
memo:'<div class="memo-line">$\\det = (4)(6) - (7)(2) = 24 - 14 = 10$ <span class="memo-mark">✓(2)</span></div>'
},

// Q9: Determinant 2×2 with negatives
{id:2009,topic:'Week 3: Matrix Algebra',
question:'Find $\\det(A)$ for $A = \\begin{pmatrix} 5 & -3 \\\\ 2 & 4 \\end{pmatrix}$.',
markingCriteria:[
  {type:'value',expected:26,tolerance:0.01,description:'det = 20 − (−6) = 26',marks:2}
],
easyTemplate:'<div class="memo-line">$\\det(A) = (@INPUT@)(@INPUT@) - (@INPUT@)(@INPUT@)$</div><div class="memo-line">$= @INPUT@ - (@INPUT@) = @INPUT@ + @INPUT@ = @INPUT@$</div>',
hardTemplate:'$\\det(A) = @INPUT@$',
memo:'<div class="memo-line">$\\det = 20 - (-6) = 20 + 6 = 26$ <span class="memo-mark">✓(2)</span></div>'
},

// Q10: Matrix multiplication 2×2
{id:2010,topic:'Week 3: Matrix Algebra',
question:'Compute $AB$ where $A = \\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix}$ and $B = \\begin{pmatrix} 5 & 1 \\\\ 2 & 3 \\end{pmatrix}$. <em>[4 marks]</em>',
markingCriteria:[
  {type:'value',expected:16,tolerance:0.01,description:'AB(1,1) = 10+6 = 16',marks:1},
  {type:'value',expected:11,tolerance:0.01,description:'AB(1,2) = 2+9 = 11',marks:1},
  {type:'value',expected:13,tolerance:0.01,description:'AB(2,1) = 5+8 = 13',marks:1},
  {type:'value',expected:13,tolerance:0.01,description:'AB(2,2) = 1+12 = 13',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>Row 1 × Col 1:</strong> $(@INPUT@)(@INPUT@) + (@INPUT@)(@INPUT@) = @INPUT@ + @INPUT@ = @INPUT@$</div><div class="memo-line"><strong>Row 1 × Col 2:</strong> $(@INPUT@)(@INPUT@) + (@INPUT@)(@INPUT@) = @INPUT@ + @INPUT@ = @INPUT@$</div><div class="memo-line"><strong>Row 2 × Col 1:</strong> $(@INPUT@)(@INPUT@) + (@INPUT@)(@INPUT@) = @INPUT@ + @INPUT@ = @INPUT@$</div><div class="memo-line"><strong>Row 2 × Col 2:</strong> $(@INPUT@)(@INPUT@) + (@INPUT@)(@INPUT@) = @INPUT@ + @INPUT@ = @INPUT@$</div><div class="memo-line">$AB = \\begin{pmatrix} @INPUT@ & @INPUT@ \\\\ @INPUT@ & @INPUT@ \\end{pmatrix}$</div>',
hardTemplate:'$AB = \\begin{pmatrix} @INPUT@ & @INPUT@ \\\\ @INPUT@ & @INPUT@ \\end{pmatrix}$',
memo:'<div class="memo-line">$AB = \\begin{pmatrix} 16 & 11 \\\\ 13 & 13 \\end{pmatrix}$ <span class="memo-mark">✓(4)</span></div>'
},

// Q11: Inverse 2×2
{id:2011,topic:'Week 3: Matrix Algebra',
question:'Find the inverse of $A = \\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix}$. <em>[5 marks]</em>',
markingCriteria:[
  {type:'value',expected:1,tolerance:0.01,description:'det(A) = 6 − 5 = 1',marks:1},
  {type:'value',expected:3,tolerance:0.01,description:'A⁻¹(1,1) = 3',marks:1},
  {type:'value',expected:-1,tolerance:0.01,description:'A⁻¹(1,2) = −1',marks:1},
  {type:'value',expected:-5,tolerance:0.01,description:'A⁻¹(2,1) = −5',marks:1},
  {type:'value',expected:2,tolerance:0.01,description:'A⁻¹(2,2) = 2',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>Step 1: Determinant</strong></div><div class="memo-line">$\\det(A) = (@INPUT@)(@INPUT@) - (@INPUT@)(@INPUT@) = @INPUT@ - @INPUT@ = @INPUT@$</div><div class="memo-line"><strong>Step 2: Adjugate</strong> (swap diagonal, negate off-diagonal)</div><div class="memo-line">$\\text{adj}(A) = \\begin{pmatrix} @INPUT@ & @INPUT@ \\\\ @INPUT@ & @INPUT@ \\end{pmatrix}$</div><div class="memo-line"><strong>Step 3: Inverse</strong></div><div class="memo-line">$A^{-1} = \\frac{1}{@INPUT@} \\begin{pmatrix} @INPUT@ & @INPUT@ \\\\ @INPUT@ & @INPUT@ \\end{pmatrix} = \\begin{pmatrix} @INPUT@ & @INPUT@ \\\\ @INPUT@ & @INPUT@ \\end{pmatrix}$</div>',
hardTemplate:'$A^{-1} = \\begin{pmatrix} @INPUT@ & @INPUT@ \\\\ @INPUT@ & @INPUT@ \\end{pmatrix}$',
memo:'<div class="memo-line">$\\det = 1$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$A^{-1} = \\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$ <span class="memo-mark">✓(4)</span></div>'
},

// Q12: 2×2 system — no clean solution
{id:2012,topic:'Week 3: Matrix Algebra',
question:'Solve:<br>$2x + 5y = 21$<br>$3x + 2y = 12$ <em>[4 marks]</em>',
markingCriteria:[
  {type:'contains',expected:['-11y','-11y =','11y'],description:'Eliminates x: −11y',marks:1},
  {type:'value',expected:38,tolerance:0.1,description:'Numerator: 6x+15y−6x−4y → 11y=63−24=39... check: 2(3x)=6x, 3(2x)=6x. eq1×3: 6x+15y=63, eq2×2: 6x+4y=24. Sub: 11y=39',marks:1},
  {type:'anyValue',expected:[3.55,3.545],tolerance:0.01,description:'y ≈ 3.55',marks:1},
  {type:'anyValue',expected:[1.64,1.636],tolerance:0.01,description:'x ≈ 1.64',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>Multiply eq1 by @INPUT@:</strong> $@INPUT@x + @INPUT@y = @INPUT@$</div><div class="memo-line"><strong>Multiply eq2 by @INPUT@:</strong> $@INPUT@x + @INPUT@y = @INPUT@$</div><div class="memo-line"><strong>Subtract:</strong></div><div class="memo-line">$(@INPUT@ - @INPUT@)y = @INPUT@ - @INPUT@$</div><div class="memo-line">$@INPUT@y = @INPUT@$</div><div class="memo-line">$y = \\frac{@INPUT@}{@INPUT@} = @INPUT@$</div><div class="memo-line">$x = \\frac{@INPUT@ - @INPUT@(@INPUT@)}{@INPUT@} = @INPUT@$</div>',
hardTemplate:'$(x, y) = (@INPUT@, @INPUT@)$',
memo:'<div class="memo-line">$eq1 \\times 3 - eq2 \\times 2: 11y = 39 \\Rightarrow y ≈ 3.55$ <span class="memo-mark">✓(2)</span></div><div class="memo-line">$x ≈ 1.64$ <span class="memo-mark">✓(2)</span></div>'
},

// Q13: 3×3 Gaussian — different coefficients
{id:2013,topic:'Week 3: Matrix Algebra',
question:'Solve using Gaussian elimination:<br>$x + 2y + z = 9$<br>$2x + y + z = 8$<br>$x + y + 2z = 11$ <em>[7 marks]</em>',
markingCriteria:[
  {type:'value',expected:1,tolerance:0.01,description:'x = 1',marks:2},
  {type:'value',expected:2,tolerance:0.01,description:'y = 2',marks:2},
  {type:'value',expected:4,tolerance:0.01,description:'z = 4',marks:3}
],
easyTemplate:'<div class="memo-line"><strong>Augmented matrix:</strong></div><div class="memo-line">$\\begin{pmatrix} 1 & 2 & 1 & | & 9 \\\\ 2 & 1 & 1 & | & 8 \\\\ 1 & 1 & 2 & | & 11 \\end{pmatrix}$</div><div class="memo-line"><strong>R₂ − @INPUT@R₁ → R₂:</strong></div><div class="memo-line">Row 2: $(@INPUT@-@INPUT@, @INPUT@-@INPUT@, @INPUT@-@INPUT@, | @INPUT@-@INPUT@)$</div><div class="memo-line">$= (0, @INPUT@, @INPUT@, | @INPUT@)$</div><div class="memo-line"><strong>R₃ − R₁ → R₃:</strong></div><div class="memo-line">$= (0, @INPUT@, @INPUT@, | @INPUT@)$</div><div class="memo-line"><strong>R₃ − R₂ (adjusted):</strong></div><div class="memo-line">Pivot to solve: $z = @INPUT@$</div><div class="memo-line"><strong>Back-substitute:</strong></div><div class="memo-line">$-3y - z = -10$: $y = \\frac{-@INPUT@ + @INPUT@}{@INPUT@} = @INPUT@$</div><div class="memo-line">$x = @INPUT@ - 2(@INPUT@) - @INPUT@ = @INPUT@$</div>',
hardTemplate:'$(x, y, z) = (@INPUT@, @INPUT@, @INPUT@)$',
memo:'<div class="memo-line">R₂−2R₁: (0,−3,−1|−10), R₃−R₁: (0,−1,1|2) <span class="memo-mark">✓(3)</span></div><div class="memo-line">z = 4, y = 2, x = 1 <span class="memo-mark">✓(4)</span></div>'
},

// Q14: Matrix arithmetic — 2A − B
{id:2014,topic:'Week 3: Matrix Algebra',
question:'Compute $2A - B$ where $A = \\begin{pmatrix} 3 & 1 \\\\ 2 & 5 \\end{pmatrix}$, $B = \\begin{pmatrix} 1 & 4 \\\\ 3 & 2 \\end{pmatrix}$. <em>[4 marks]</em>',
markingCriteria:[
  {type:'value',expected:5,tolerance:0.01,description:'(1,1) = 6−1 = 5',marks:1},
  {type:'value',expected:-2,tolerance:0.01,description:'(1,2) = 2−4 = −2',marks:1},
  {type:'value',expected:1,tolerance:0.01,description:'(2,1) = 4−3 = 1',marks:1},
  {type:'value',expected:8,tolerance:0.01,description:'(2,2) = 10−2 = 8',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>Step 1: Compute 2A</strong></div><div class="memo-line">$2A = \\begin{pmatrix} 2 \\times @INPUT@ & 2 \\times @INPUT@ \\\\ 2 \\times @INPUT@ & 2 \\times @INPUT@ \\end{pmatrix} = \\begin{pmatrix} @INPUT@ & @INPUT@ \\\\ @INPUT@ & @INPUT@ \\end{pmatrix}$</div><div class="memo-line"><strong>Step 2: Subtract B</strong></div><div class="memo-line">$2A - B = \\begin{pmatrix} @INPUT@ - @INPUT@ & @INPUT@ - @INPUT@ \\\\ @INPUT@ - @INPUT@ & @INPUT@ - @INPUT@ \\end{pmatrix} = \\begin{pmatrix} @INPUT@ & @INPUT@ \\\\ @INPUT@ & @INPUT@ \\end{pmatrix}$</div>',
hardTemplate:'$2A - B = \\begin{pmatrix} @INPUT@ & @INPUT@ \\\\ @INPUT@ & @INPUT@ \\end{pmatrix}$',
memo:'<div class="memo-line">$2A = \\begin{pmatrix} 6 & 2 \\\\ 4 & 10 \\end{pmatrix}$, $2A-B = \\begin{pmatrix} 5 & -2 \\\\ 1 & 8 \\end{pmatrix}$ <span class="memo-mark">✓(4)</span></div>'
},

// Q15: Inverse 2×2 — different numbers
{id:2015,topic:'Week 3: Matrix Algebra',
question:'Find the inverse of $A = \\begin{pmatrix} 4 & 7 \\\\ 2 & 6 \\end{pmatrix}$. <em>[5 marks]</em>',
markingCriteria:[
  {type:'value',expected:10,tolerance:0.01,description:'det(A) = 24 − 14 = 10',marks:1},
  {type:'value',expected:0.6,tolerance:0.01,description:'A⁻¹(1,1) = 6/10 = 0.6',marks:1},
  {type:'value',expected:-0.7,tolerance:0.01,description:'A⁻¹(1,2) = −7/10 = −0.7',marks:1},
  {type:'value',expected:-0.2,tolerance:0.01,description:'A⁻¹(2,1) = −2/10 = −0.2',marks:1},
  {type:'value',expected:0.4,tolerance:0.01,description:'A⁻¹(2,2) = 4/10 = 0.4',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>Step 1: det(A)</strong></div><div class="memo-line">$\\det = (@INPUT@)(@INPUT@) - (@INPUT@)(@INPUT@) = @INPUT@ - @INPUT@ = @INPUT@$</div><div class="memo-line"><strong>Step 2: Adjugate</strong></div><div class="memo-line">$\\text{adj}(A) = \\begin{pmatrix} @INPUT@ & @INPUT@ \\\\ @INPUT@ & @INPUT@ \\end{pmatrix}$</div><div class="memo-line"><strong>Step 3: Inverse</strong></div><div class="memo-line">$A^{-1} = \\frac{1}{@INPUT@} \\begin{pmatrix} @INPUT@ & @INPUT@ \\\\ @INPUT@ & @INPUT@ \\end{pmatrix} = \\begin{pmatrix} @INPUT@ & @INPUT@ \\\\ @INPUT@ & @INPUT@ \\end{pmatrix}$</div>',
hardTemplate:'$A^{-1} = \\begin{pmatrix} @INPUT@ & @INPUT@ \\\\ @INPUT@ & @INPUT@ \\end{pmatrix}$',
memo:'<div class="memo-line">$\\det = 10$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$A^{-1} = \\frac{1}{10}\\begin{pmatrix} 6 & -7 \\\\ -2 & 4 \\end{pmatrix} = \\begin{pmatrix} 0.6 & -0.7 \\\\ -0.2 & 0.4 \\end{pmatrix}$ <span class="memo-mark">✓(4)</span></div>'
},

// Q16: 3×3 Gaussian — harder coefficients
{id:2016,topic:'Week 3: Matrix Algebra',
question:'Solve using Gaussian elimination:<br>$2x + y - z = 3$<br>$x - y + 2z = 5$<br>$3x + 2y + z = 10$ <em>[7 marks]</em>',
markingCriteria:[
  {type:'value',expected:2,tolerance:0.01,description:'x = 2',marks:2},
  {type:'value',expected:1,tolerance:0.01,description:'y = 1',marks:2},
  {type:'value',expected:2,tolerance:0.01,description:'z = 2',marks:3}
],
easyTemplate:'<div class="memo-line"><strong>Augmented matrix:</strong></div><div class="memo-line">$\\begin{pmatrix} 2 & 1 & -1 & | & 3 \\\\ 1 & -1 & 2 & | & 5 \\\\ 3 & 2 & 1 & | & 10 \\end{pmatrix}$</div><div class="memo-line"><strong>Swap R₁ ↔ R₂</strong> (put 1 in pivot):</div><div class="memo-line">$\\begin{pmatrix} 1 & -1 & 2 & | & 5 \\\\ 2 & 1 & -1 & | & 3 \\\\ 3 & 2 & 1 & | & 10 \\end{pmatrix}$</div><div class="memo-line"><strong>R₂ − @INPUT@R₁:</strong> $(0, @INPUT@, @INPUT@ | @INPUT@)$</div><div class="memo-line"><strong>R₃ − @INPUT@R₁:</strong> $(0, @INPUT@, @INPUT@ | @INPUT@)$</div><div class="memo-line"><strong>Continue elimination and back-substitute:</strong></div><div class="memo-line">$z = @INPUT@$, $y = @INPUT@$, $x = @INPUT@$</div>',
hardTemplate:'$(x, y, z) = (@INPUT@, @INPUT@, @INPUT@)$',
memo:'<div class="memo-line">Row ops → z=2, y=1, x=2 <span class="memo-mark">✓(7)</span></div>'
},

// Q17: Matrix-vector product
{id:2017,topic:'Week 3: Matrix Algebra',
question:'Compute $Ax$ where $A = \\begin{pmatrix} 1 & 0 & 2 \\\\ 3 & 1 & 0 \\end{pmatrix}$ and $x = \\begin{pmatrix} 2 \\\\ 4 \\\\ 1 \\end{pmatrix}$. <em>[2 marks]</em>',
markingCriteria:[
  {type:'value',expected:4,tolerance:0.01,description:'Row 1: 2+0+2 = 4',marks:1},
  {type:'value',expected:10,tolerance:0.01,description:'Row 2: 6+4+0 = 10',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>Row 1:</strong> $(@INPUT@)(@INPUT@) + (@INPUT@)(@INPUT@) + (@INPUT@)(@INPUT@) = @INPUT@ + @INPUT@ + @INPUT@ = @INPUT@$</div><div class="memo-line"><strong>Row 2:</strong> $(@INPUT@)(@INPUT@) + (@INPUT@)(@INPUT@) + (@INPUT@)(@INPUT@) = @INPUT@ + @INPUT@ + @INPUT@ = @INPUT@$</div><div class="memo-line">$Ax = \\begin{pmatrix} @INPUT@ \\\\ @INPUT@ \\end{pmatrix}$</div>',
hardTemplate:'$Ax = \\begin{pmatrix} @INPUT@ \\\\ @INPUT@ \\end{pmatrix}$',
memo:'<div class="memo-line">$Ax = \\begin{pmatrix} 4 \\\\ 10 \\end{pmatrix}$ <span class="memo-mark">✓(2)</span></div>'
},

// Q18: Transpose
{id:2018,topic:'Week 3: Matrix Algebra',
question:'Find $A^T$ for $A = \\begin{pmatrix} 1 & 3 & 5 \\\\ 2 & 4 & 6 \\end{pmatrix}$. What are the dimensions of $A$ and $A^T$? <em>[3 marks]</em>',
markingCriteria:[
  {type:'contains',expected:['2 × 3','2×3','2x3'],description:'A is 2×3',marks:1},
  {type:'contains',expected:['3 × 2','3×2','3x2'],description:'Aᵀ is 3×2',marks:1},
  {type:'value',expected:2,tolerance:0.01,description:'Aᵀ(1,2) = 2',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>Dimensions:</strong> $A$ is @INPUT@ × @INPUT@, so $A^T$ is @INPUT@ × @INPUT@</div><div class="memo-line"><strong>Transpose</strong> (rows become columns):</div><div class="memo-line">$A^T = \\begin{pmatrix} @INPUT@ & @INPUT@ \\\\ @INPUT@ & @INPUT@ \\\\ @INPUT@ & @INPUT@ \\end{pmatrix}$</div>',
hardTemplate:'$A^T = \\begin{pmatrix} @INPUT@ & @INPUT@ \\\\ @INPUT@ & @INPUT@ \\\\ @INPUT@ & @INPUT@ \\end{pmatrix}$',
memo:'<div class="memo-line">A: 2×3, Aᵀ: 3×2 <span class="memo-mark">✓(2)</span></div><div class="memo-line">$A^T = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\\\ 5 & 6 \\end{pmatrix}$ <span class="memo-mark">✓(1)</span></div>'
},

// Q19: 2×2 system — word problem (mixture)
{id:2019,topic:'Week 3: Matrix Algebra',
question:'A coffee shop blends two types of beans. Type A costs R80/kg, Type B costs R120/kg. They need 50 kg of blend at R92/kg. How many kg of each type? <em>[4 marks]</em>',
markingCriteria:[
  {type:'contains',expected:['x + y = 50','x+y=50'],description:'Weight equation',marks:1},
  {type:'contains',expected:['80x + 120y = 4600','80x+120y=4600'],description:'Cost equation',marks:1},
  {type:'value',expected:35,tolerance:0.01,description:'Type A: 35 kg',marks:1},
  {type:'value',expected:15,tolerance:0.01,description:'Type B: 15 kg',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>Equations:</strong></div><div class="memo-line">$x + y = @INPUT@$ ... (weight)</div><div class="memo-line">$@INPUT@x + @INPUT@y = @INPUT@ \\times @INPUT@ = @INPUT@$ ... (cost)</div><div class="memo-line"><strong>From eq1:</strong> $x = @INPUT@ - y$</div><div class="memo-line"><strong>Substitute:</strong></div><div class="memo-line">$@INPUT@(@INPUT@ - y) + @INPUT@y = @INPUT@$</div><div class="memo-line">$@INPUT@ - @INPUT@y + @INPUT@y = @INPUT@$</div><div class="memo-line">$@INPUT@y = @INPUT@ - @INPUT@ = @INPUT@$</div><div class="memo-line">$y = @INPUT@$ kg (Type B)</div><div class="memo-line">$x = @INPUT@ - @INPUT@ = @INPUT@$ kg (Type A)</div>',
hardTemplate:'Type A: @INPUT@ kg, Type B: @INPUT@ kg',
memo:'<div class="memo-line">x+y=50, 80x+120y=4600 <span class="memo-mark">✓(2)</span></div><div class="memo-line">40y=600 → y=15, x=35 <span class="memo-mark">✓(2)</span></div>'
},

// Q20: 3×3 Gaussian — nutrition problem
{id:2020,topic:'Week 3: Matrix Algebra',
question:'A dietician mixes Foods A, B, C. Per unit:<br>Protein: A=2g, B=3g, C=1g (need 17g)<br>Fat: A=1g, B=2g, C=3g (need 16g)<br>Carbs: A=4g, B=1g, C=2g (need 19g)<br>Find units of each food. <em>[7 marks]</em>',
markingCriteria:[
  {type:'value',expected:3,tolerance:0.01,description:'A = 3',marks:2},
  {type:'value',expected:2,tolerance:0.01,description:'B = 2',marks:2},
  {type:'value',expected:5,tolerance:0.01,description:'C = 5',marks:3}
],
easyTemplate:'<div class="memo-line"><strong>System:</strong></div><div class="memo-line">$@INPUT@A + @INPUT@B + @INPUT@C = @INPUT@$ (Protein)</div><div class="memo-line">$@INPUT@A + @INPUT@B + @INPUT@C = @INPUT@$ (Fat)</div><div class="memo-line">$@INPUT@A + @INPUT@B + @INPUT@C = @INPUT@$ (Carbs)</div><div class="memo-line"><strong>Augmented matrix and row reduce:</strong></div><div class="memo-line">$\\begin{pmatrix} @INPUT@ & @INPUT@ & @INPUT@ & | & @INPUT@ \\\\ @INPUT@ & @INPUT@ & @INPUT@ & | & @INPUT@ \\\\ @INPUT@ & @INPUT@ & @INPUT@ & | & @INPUT@ \\end{pmatrix}$</div><div class="memo-line"><strong>After elimination:</strong></div><div class="memo-line">$C = @INPUT@$, $B = @INPUT@$, $A = @INPUT@$</div>',
hardTemplate:'$(A, B, C) = (@INPUT@, @INPUT@, @INPUT@)$',
memo:'<div class="memo-line">2A+3B+C=17, A+2B+3C=16, 4A+B+2C=19 <span class="memo-mark">✓(1)</span></div><div class="memo-line">Gauss → A=3, B=2, C=5 <span class="memo-mark">✓(6)</span></div>'
},

// Q21: Scalar mult + addition: 3A + 2B
{id:2021,topic:'Week 3: Matrix Algebra',
question:'Compute $3A + 2B$ where $A = \\begin{pmatrix} 1 & 4 \\\\ 2 & 3 \\end{pmatrix}$, $B = \\begin{pmatrix} 5 & 1 \\\\ 3 & 2 \\end{pmatrix}$. <em>[4 marks]</em>',
markingCriteria:[
  {type:'value',expected:13,tolerance:0.01,description:'(1,1) = 3+10 = 13',marks:1},
  {type:'value',expected:14,tolerance:0.01,description:'(1,2) = 12+2 = 14',marks:1},
  {type:'value',expected:12,tolerance:0.01,description:'(2,1) = 6+6 = 12',marks:1},
  {type:'value',expected:13,tolerance:0.01,description:'(2,2) = 9+4 = 13',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>3A:</strong> $\\begin{pmatrix} @INPUT@ & @INPUT@ \\\\ @INPUT@ & @INPUT@ \\end{pmatrix}$</div><div class="memo-line"><strong>2B:</strong> $\\begin{pmatrix} @INPUT@ & @INPUT@ \\\\ @INPUT@ & @INPUT@ \\end{pmatrix}$</div><div class="memo-line"><strong>3A + 2B:</strong></div><div class="memo-line">$\\begin{pmatrix} @INPUT@ + @INPUT@ & @INPUT@ + @INPUT@ \\\\ @INPUT@ + @INPUT@ & @INPUT@ + @INPUT@ \\end{pmatrix} = \\begin{pmatrix} @INPUT@ & @INPUT@ \\\\ @INPUT@ & @INPUT@ \\end{pmatrix}$</div>',
hardTemplate:'$3A+2B = \\begin{pmatrix} @INPUT@ & @INPUT@ \\\\ @INPUT@ & @INPUT@ \\end{pmatrix}$',
memo:'<div class="memo-line">$3A = \\begin{pmatrix} 3 & 12 \\\\ 6 & 9 \\end{pmatrix}$, $2B = \\begin{pmatrix} 10 & 2 \\\\ 6 & 4 \\end{pmatrix}$ <span class="memo-mark">✓(2)</span></div><div class="memo-line">$3A+2B = \\begin{pmatrix} 13 & 14 \\\\ 12 & 13 \\end{pmatrix}$ <span class="memo-mark">✓(2)</span></div>'
},

// Q22: 2×2 system — Cramer's rule
{id:2022,topic:'Week 3: Matrix Algebra',
question:'Use Cramer\'s rule to solve:<br>$3x + 4y = 25$<br>$x + 2y = 11$ <em>[6 marks]</em>',
markingCriteria:[
  {type:'value',expected:2,tolerance:0.01,description:'D = 6−4 = 2',marks:1},
  {type:'value',expected:6,tolerance:0.01,description:'Dx = 50−44 = 6',marks:1},
  {type:'value',expected:3,tolerance:0.01,description:'x = 6/2 = 3',marks:1},
  {type:'value',expected:8,tolerance:0.01,description:'Dy = 33−25 = 8',marks:1},
  {type:'value',expected:4,tolerance:0.01,description:'y = 8/2 = 4',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>D:</strong> $\\det\\begin{pmatrix} @INPUT@ & @INPUT@ \\\\ @INPUT@ & @INPUT@ \\end{pmatrix} = (@INPUT@)(@INPUT@) - (@INPUT@)(@INPUT@) = @INPUT@ - @INPUT@ = @INPUT@$</div><div class="memo-line"><strong>Dx:</strong> $\\det\\begin{pmatrix} @INPUT@ & @INPUT@ \\\\ @INPUT@ & @INPUT@ \\end{pmatrix} = (@INPUT@)(@INPUT@) - (@INPUT@)(@INPUT@) = @INPUT@ - @INPUT@ = @INPUT@$</div><div class="memo-line"><strong>Dy:</strong> $\\det\\begin{pmatrix} @INPUT@ & @INPUT@ \\\\ @INPUT@ & @INPUT@ \\end{pmatrix} = (@INPUT@)(@INPUT@) - (@INPUT@)(@INPUT@) = @INPUT@ - @INPUT@ = @INPUT@$</div><div class="memo-line">$x = \\frac{D_x}{D} = \\frac{@INPUT@}{@INPUT@} = @INPUT@$</div><div class="memo-line">$y = \\frac{D_y}{D} = \\frac{@INPUT@}{@INPUT@} = @INPUT@$</div>',
hardTemplate:'$(x, y) = (@INPUT@, @INPUT@)$',
memo:'<div class="memo-line">D=2, Dx=6, Dy=8 <span class="memo-mark">✓(3)</span></div><div class="memo-line">x=3, y=4 <span class="memo-mark">✓(2)</span></div>'
},

// Q23: Row-vector × Matrix
{id:2023,topic:'Week 3: Matrix Algebra',
question:'Compute $vA$ where $v = \\begin{pmatrix} 1 & 2 & 3 \\end{pmatrix}$ and $A = \\begin{pmatrix} 4 \\\\ 5 \\\\ 6 \\end{pmatrix}$. <em>[2 marks]</em>',
markingCriteria:[
  {type:'value',expected:32,tolerance:0.01,description:'vA = 4+10+18 = 32',marks:2}
],
easyTemplate:'<div class="memo-line">$vA = (@INPUT@)(@INPUT@) + (@INPUT@)(@INPUT@) + (@INPUT@)(@INPUT@)$</div><div class="memo-line">$= @INPUT@ + @INPUT@ + @INPUT@ = @INPUT@$</div>',
hardTemplate:'$vA = @INPUT@$',
memo:'<div class="memo-line">$vA = 4+10+18 = 32$ <span class="memo-mark">✓(2)</span></div>'
},

// Q24: Singular matrix check
{id:2024,topic:'Week 3: Matrix Algebra',
question:'Is the matrix $A = \\begin{pmatrix} 6 & 3 \\\\ 4 & 2 \\end{pmatrix}$ invertible? Explain. <em>[3 marks]</em>',
markingCriteria:[
  {type:'value',expected:0,tolerance:0.01,description:'det = 12 − 12 = 0',marks:1},
  {type:'contains',expected:['singular','not invertible','no inverse','det = 0','det=0'],description:'Matrix is singular (det = 0)',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>Compute determinant:</strong></div><div class="memo-line">$\\det(A) = (@INPUT@)(@INPUT@) - (@INPUT@)(@INPUT@) = @INPUT@ - @INPUT@ = @INPUT@$</div><div class="memo-line"><strong>Since det(A) = @INPUT@, the matrix is @INPUT@</strong></div><div class="memo-line">A matrix is invertible only if $\\det \\neq @INPUT@$</div>',
hardTemplate:'det = @INPUT@, Invertible: @INPUT@',
memo:'<div class="memo-line">$\\det = 12-12 = 0$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">Singular — not invertible <span class="memo-mark">✓(2)</span></div>'
},

// Q25: 2×2 system word problem — investment
{id:2025,topic:'Week 3: Matrix Algebra',
question:'R400 000 is split between two accounts. Account A earns 10%, Account B earns 8%. Total annual interest is R36 000. How much is in each account? <em>[4 marks]</em>',
markingCriteria:[
  {type:'contains',expected:['x + y = 400000','x+y=400000'],description:'Total: x + y = 400000',marks:1},
  {type:'contains',expected:['0.10x + 0.08y','0.1x+0.08y','10x + 8y'],description:'Interest equation',marks:1},
  {type:'value',expected:200000,tolerance:1,description:'A = R200 000',marks:1},
  {type:'value',expected:200000,tolerance:1,description:'B = R200 000',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>Let x = Account A, y = Account B</strong></div><div class="memo-line">$x + y = @INPUT@$ ... (total)</div><div class="memo-line">$@INPUT@x + @INPUT@y = @INPUT@$ ... (interest)</div><div class="memo-line"><strong>From eq1:</strong> $y = @INPUT@ - x$</div><div class="memo-line"><strong>Substitute:</strong></div><div class="memo-line">$@INPUT@x + @INPUT@(@INPUT@ - x) = @INPUT@$</div><div class="memo-line">$@INPUT@x + @INPUT@ - @INPUT@x = @INPUT@$</div><div class="memo-line">$@INPUT@x = @INPUT@ - @INPUT@ = @INPUT@$</div><div class="memo-line">$x = R@INPUT@$ (Account A)</div><div class="memo-line">$y = @INPUT@ - @INPUT@ = R@INPUT@$ (Account B)</div>',
hardTemplate:'A: R@INPUT@, B: R@INPUT@',
memo:'<div class="memo-line">0.10x+0.08y=36000, 0.02x=4000, x=200000 <span class="memo-mark">✓(2)</span></div><div class="memo-line">y=200000 <span class="memo-mark">✓(2)</span></div>'
},

// Q26: 3×3 Gaussian — production scheduling
{id:2026,topic:'Week 3: Matrix Algebra',
question:'A factory makes 3 products using 3 machines. Hours per unit:<br>Machine 1: P₁=1h, P₂=2h, P₃=1h (available: 170h)<br>Machine 2: P₁=2h, P₂=1h, P₃=3h (available: 260h)<br>Machine 3: P₁=1h, P₂=1h, P₃=2h (available: 170h)<br>Find production quantities. <em>[7 marks]</em>',
markingCriteria:[
  {type:'value',expected:30,tolerance:0.5,description:'P₁ = 30',marks:2},
  {type:'value',expected:50,tolerance:0.5,description:'P₂ = 50',marks:2},
  {type:'value',expected:40,tolerance:0.5,description:'P₃ = 40',marks:3}
],
easyTemplate:'<div class="memo-line"><strong>System:</strong></div><div class="memo-line">$@INPUT@x + @INPUT@y + @INPUT@z = @INPUT@$</div><div class="memo-line">$@INPUT@x + @INPUT@y + @INPUT@z = @INPUT@$</div><div class="memo-line">$@INPUT@x + @INPUT@y + @INPUT@z = @INPUT@$</div><div class="memo-line"><strong>Set up augmented matrix and row reduce:</strong></div><div class="memo-line">After Gaussian elimination:</div><div class="memo-line">$P_3 = @INPUT@$, $P_2 = @INPUT@$, $P_1 = @INPUT@$</div>',
hardTemplate:'$(P_1, P_2, P_3) = (@INPUT@, @INPUT@, @INPUT@)$',
memo:'<div class="memo-line">x+2y+z=170, 2x+y+3z=260, x+y+2z=170 <span class="memo-mark">✓(1)</span></div><div class="memo-line">P₁=30, P₂=50, P₃=40 <span class="memo-mark">✓(6)</span></div>'
},

// Q27: Matrix multiplication 2×2 — different numbers
{id:2027,topic:'Week 3: Matrix Algebra',
question:'Compute $AB$ where $A = \\begin{pmatrix} 4 & -1 \\\\ 3 & 2 \\end{pmatrix}$, $B = \\begin{pmatrix} 2 & 5 \\\\ 1 & -3 \\end{pmatrix}$. <em>[4 marks]</em>',
markingCriteria:[
  {type:'value',expected:7,tolerance:0.01,description:'(1,1) = 8−1 = 7',marks:1},
  {type:'value',expected:23,tolerance:0.01,description:'(1,2) = 20+3 = 23',marks:1},
  {type:'value',expected:8,tolerance:0.01,description:'(2,1) = 6+2 = 8',marks:1},
  {type:'value',expected:9,tolerance:0.01,description:'(2,2) = 15−6 = 9',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>R1×C1:</strong> $(@INPUT@)(@INPUT@) + (@INPUT@)(@INPUT@) = @INPUT@ + (@INPUT@) = @INPUT@$</div><div class="memo-line"><strong>R1×C2:</strong> $(@INPUT@)(@INPUT@) + (@INPUT@)(@INPUT@) = @INPUT@ + @INPUT@ = @INPUT@$</div><div class="memo-line"><strong>R2×C1:</strong> $(@INPUT@)(@INPUT@) + (@INPUT@)(@INPUT@) = @INPUT@ + @INPUT@ = @INPUT@$</div><div class="memo-line"><strong>R2×C2:</strong> $(@INPUT@)(@INPUT@) + (@INPUT@)(@INPUT@) = @INPUT@ + (@INPUT@) = @INPUT@$</div><div class="memo-line">$AB = \\begin{pmatrix} @INPUT@ & @INPUT@ \\\\ @INPUT@ & @INPUT@ \\end{pmatrix}$</div>',
hardTemplate:'$AB = \\begin{pmatrix} @INPUT@ & @INPUT@ \\\\ @INPUT@ & @INPUT@ \\end{pmatrix}$',
memo:'<div class="memo-line">$AB = \\begin{pmatrix} 7 & 23 \\\\ 8 & 9 \\end{pmatrix}$ <span class="memo-mark">✓(4)</span></div>'
},

// Q28: Show AB ≠ BA
{id:2028,topic:'Week 3: Matrix Algebra',
question:'For $A = \\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}$, $B = \\begin{pmatrix} 1 & 0 \\\\ 3 & 1 \\end{pmatrix}$, compute $AB$ and $BA$. Is $AB = BA$? <em>[5 marks]</em>',
markingCriteria:[
  {type:'value',expected:7,tolerance:0.01,description:'AB(1,1) = 1+6 = 7',marks:1},
  {type:'value',expected:2,tolerance:0.01,description:'AB(1,2) = 0+2 = 2',marks:1},
  {type:'value',expected:1,tolerance:0.01,description:'BA(1,1) = 1+0 = 1',marks:1},
  {type:'value',expected:2,tolerance:0.01,description:'BA(1,2) = 2+0 = 2',marks:1},
  {type:'contains',expected:['not equal','≠','no','ab ≠ ba'],description:'AB ≠ BA',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>AB:</strong></div><div class="memo-line">$AB = \\begin{pmatrix} @INPUT@+@INPUT@ & @INPUT@+@INPUT@ \\\\ @INPUT@+@INPUT@ & @INPUT@+@INPUT@ \\end{pmatrix} = \\begin{pmatrix} @INPUT@ & @INPUT@ \\\\ @INPUT@ & @INPUT@ \\end{pmatrix}$</div><div class="memo-line"><strong>BA:</strong></div><div class="memo-line">$BA = \\begin{pmatrix} @INPUT@+@INPUT@ & @INPUT@+@INPUT@ \\\\ @INPUT@+@INPUT@ & @INPUT@+@INPUT@ \\end{pmatrix} = \\begin{pmatrix} @INPUT@ & @INPUT@ \\\\ @INPUT@ & @INPUT@ \\end{pmatrix}$</div><div class="memo-line"><strong>Conclusion:</strong> $AB @INPUT@ BA$ (matrix multiplication is @INPUT@)</div>',
hardTemplate:'AB = $\\begin{pmatrix} @INPUT@ & @INPUT@ \\\\ @INPUT@ & @INPUT@ \\end{pmatrix}$, BA = $\\begin{pmatrix} @INPUT@ & @INPUT@ \\\\ @INPUT@ & @INPUT@ \\end{pmatrix}$',
memo:'<div class="memo-line">$AB = \\begin{pmatrix} 7 & 2 \\\\ 3 & 1 \\end{pmatrix}$, $BA = \\begin{pmatrix} 1 & 2 \\\\ 3 & 7 \\end{pmatrix}$ <span class="memo-mark">✓(4)</span></div><div class="memo-line">AB ≠ BA <span class="memo-mark">✓(1)</span></div>'
},

// Q29: Determinant and inverse — check if solvable
{id:2029,topic:'Week 3: Matrix Algebra',
question:'Given $A = \\begin{pmatrix} 3 & 5 \\\\ 1 & 4 \\end{pmatrix}$, find $\\det(A)$ and $A^{-1}$. <em>[5 marks]</em>',
markingCriteria:[
  {type:'value',expected:7,tolerance:0.01,description:'det = 12 − 5 = 7',marks:1},
  {type:'anyValue',expected:[0.571,0.57],tolerance:0.01,description:'A⁻¹(1,1) = 4/7 ≈ 0.571',marks:1},
  {type:'anyValue',expected:[-0.714,-0.71],tolerance:0.01,description:'A⁻¹(1,2) = −5/7 ≈ −0.714',marks:1},
  {type:'anyValue',expected:[-0.143,-0.14],tolerance:0.01,description:'A⁻¹(2,1) = −1/7 ≈ −0.143',marks:1},
  {type:'anyValue',expected:[0.429,0.43],tolerance:0.01,description:'A⁻¹(2,2) = 3/7 ≈ 0.429',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>det(A):</strong> $(@INPUT@)(@INPUT@) - (@INPUT@)(@INPUT@) = @INPUT@ - @INPUT@ = @INPUT@$</div><div class="memo-line"><strong>Adjugate:</strong> $\\begin{pmatrix} @INPUT@ & @INPUT@ \\\\ @INPUT@ & @INPUT@ \\end{pmatrix}$</div><div class="memo-line"><strong>Inverse:</strong> $A^{-1} = \\frac{1}{@INPUT@}\\begin{pmatrix} @INPUT@ & @INPUT@ \\\\ @INPUT@ & @INPUT@ \\end{pmatrix}$</div><div class="memo-line">$= \\begin{pmatrix} @INPUT@ & @INPUT@ \\\\ @INPUT@ & @INPUT@ \\end{pmatrix}$</div>',
hardTemplate:'det = @INPUT@, $A^{-1} = \\begin{pmatrix} @INPUT@ & @INPUT@ \\\\ @INPUT@ & @INPUT@ \\end{pmatrix}$',
memo:'<div class="memo-line">det = 7, $A^{-1} = \\frac{1}{7}\\begin{pmatrix} 4 & -5 \\\\ -1 & 3 \\end{pmatrix}$ <span class="memo-mark">✓(5)</span></div>'
},

// Q30: 3×3 system — bookstore word problem
{id:2030,topic:'Week 3: Matrix Algebra',
question:'A bookstore sells textbooks (x), novels (y), and magazines (z).<br>Monday: 2x + 3y + 5z = R440<br>Tuesday: 4x + y + 3z = R400<br>Wednesday: x + 2y + 4z = R300<br>Find the price of each item. <em>[7 marks]</em>',
markingCriteria:[
  {type:'value',expected:60,tolerance:0.5,description:'Textbook = R60',marks:2},
  {type:'value',expected:40,tolerance:0.5,description:'Novel = R40',marks:2},
  {type:'value',expected:40,tolerance:0.5,description:'Magazine = R40',marks:3}
],
easyTemplate:'<div class="memo-line"><strong>Augmented matrix:</strong></div><div class="memo-line">$\\begin{pmatrix} @INPUT@ & @INPUT@ & @INPUT@ & | & @INPUT@ \\\\ @INPUT@ & @INPUT@ & @INPUT@ & | & @INPUT@ \\\\ @INPUT@ & @INPUT@ & @INPUT@ & | & @INPUT@ \\end{pmatrix}$</div><div class="memo-line"><strong>Row operations to echelon form:</strong></div><div class="memo-line">R₂ − @INPUT@R₁, R₃ − R₁ (÷2)</div><div class="memo-line"><strong>Back-substitute:</strong></div><div class="memo-line">$z = R@INPUT@$</div><div class="memo-line">$y = R@INPUT@$</div><div class="memo-line">$x = R@INPUT@$</div>',
hardTemplate:'$(x, y, z) = (R@INPUT@, R@INPUT@, R@INPUT@)$',
memo:'<div class="memo-line">2x+3y+5z=440, 4x+y+3z=400, x+2y+4z=300 <span class="memo-mark">✓(1)</span></div><div class="memo-line">Gauss → x=60, y=40, z=40 <span class="memo-mark">✓(6)</span></div>'
},

];if(!window.QUESTIONS)window.QUESTIONS=[];window.QUESTIONS.push(...Q);})();
