// ========== MTHS 112 — MATRICES & SYSTEMS (Workspace Format) ==========
(function(){
  const Q = [

{id:2001, topic:'Matrices & Systems of Equations',
  question:'Solve the following system using Gaussian elimination:<br><br>$x + 3y + 3z = 32$<br>$x + 4y + 3z = 37$<br>$x + 3y + 4z = 35$<br><br><em>Tip: When showing row operations, you can use the format: <strong>aR1 ± bR2 ⇒ [x, y, z | ans]</strong></em>',
  markingCriteria: [
    {type:'contains', expected:['augmented','matrix','[','1 3 3'], description:'Sets up augmented matrix', marks:1},
    {type:'contains', expected:['r2 - r1','r2-r1','r₂ - r₁'], description:'Row operation R2 - R1', marks:1},
    {type:'contains', expected:['z=3','z = 3'], description:'Finds z = 3', marks:1},
    {type:'contains', expected:['y=5','y = 5'], description:'Finds y = 5', marks:2},
    {type:'contains', expected:['x=8','x = 8'], description:'Finds x = 8', marks:2}
  ],
  easyTemplate: '<div class="memo-line">Augmented matrix: $\\left[\\begin{array}{ccc|c} 1&3&3&@INPUT@ \\\\ 1&4&3&@INPUT@ \\\\ 1&3&4&@INPUT@ \\end{array}\\right]$ </div><div class="memo-line">$R_2 - R_1 \\Rightarrow [0, 1, 0 | 5]$ </div><div class="memo-line">$R_3 - R_1 \\Rightarrow [0, 0, 1 | 3]$ </div><div class="memo-line">From $R_3$: $z = 3$ </div><div class="memo-line">From $R_2$: $y = 5$ </div><div class="memo-line">From $R_1$: $x + @INPUT@ + 9 = @INPUT@ \\Rightarrow x = 8$ </div><div class="memo-line">$(x, y, z) = (\@INPUT@)$</div>',
  hardTemplate: '(x, y, z) = (@INPUT@, @INPUT@, @INPUT@)',
  memo: '<div class="memo-line">Augmented matrix: $\\left[\\begin{array}{ccc|c} 1&3&3&32 \\\\ 1&4&3&37 \\\\ 1&3&4&35 \\end{array}\\right]$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$R_2 - R_1 \\Rightarrow [0, 1, 0 | 5]$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$R_3 - R_1 \\Rightarrow [0, 0, 1 | 3]$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">From $R_3$: $z = 3$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">From $R_2$: $y = 5$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">From $R_1$: $x + 15 + 9 = 32 \\Rightarrow x = 8$ <span class="memo-mark">✓(2)</span></div><div class="memo-line">$(x, y, z) = (8, 5, 3)$</div>'
},

{id:2002, topic:'Matrices & Systems of Equations',
  question:'A car dealer buys midsize cars for 12% under list price and luxury cars for 15% under list price. Matrix $A$ gives the list prices:<br><br>$A = \\begin{pmatrix} 360\\,000 & 420\\,000 \\\\ 500\\,000 & 560\\,000 \\end{pmatrix}$ (Midsize / Luxury)<br><br>$B = \\begin{pmatrix} 0.88 & 0 \\\\ 0 & 0.85 \\end{pmatrix}$<br><br>3.1 Determine the product matrix $BA$. <em>[4 marks]</em><br>3.2 What does each entry in the product matrix represent? <em>[1 mark]</em>',
  markingCriteria: [
    {type:'value', expected:0.88, tolerance:0.01, description:'Uses 0.88 for midsize (100% - 12%)', marks:1},
    {type:'value', expected:0.85, tolerance:0.01, description:'Uses 0.85 for luxury (100% - 15%)', marks:1},
    {type:'value', expected:316800, tolerance:100, description:'BA entry (1,1): 360000 × 0.88 = 316 800', marks:1},
    {type:'value', expected:369600, tolerance:100, description:'BA entry (1,2): 420000 × 0.88 = 369 600', marks:1},
    {type:'value', expected:425000, tolerance:100, description:'BA entry (2,1): 500000 × 0.85 = 425 000', marks:1},
    {type:'value', expected:476000, tolerance:100, description:'BA entry (2,2): 560000 × 0.85 = 476 000', marks:1},
    {type:'contains', expected:['dealer','cost','pay','actual','purchase'], description:'Explains: entries represent the dealer\'s purchase cost', marks:1}
  ],
  easyTemplate: '<div class="memo-line">$BA = \\begin{pmatrix} @INPUT@ & 0 \\\\ 0 & @INPUT@ \\end{pmatrix} \\begin{pmatrix} @INPUT@ & @INPUT@ \\\\ @INPUT@ & @INPUT@ \\end{pmatrix}$ </div><div class="memo-line">$= \\begin{pmatrix} @INPUT@ \\times @INPUT@ & @INPUT@ \\times @INPUT@ \\\\ @INPUT@ \\times @INPUT@ & @INPUT@ \\times @INPUT@ \\end{pmatrix}$</div><div class="memo-line">$= \\begin{pmatrix} @INPUT@\\,@INPUT@ & @INPUT@\\,@INPUT@ \\\\ @INPUT@\\,@INPUT@ & @INPUT@\\,@INPUT@ \\end{pmatrix}$ </div><div class="memo-line">Each entry represents the <strong>dealer\'s cost</strong> (purchase price) for each car. </div>',
  hardTemplate: '3.1 $BA = \\begin{pmatrix} @INPUT@ & @INPUT@ \\\\ @INPUT@ & @INPUT@ \\end{pmatrix}$<br><br>3.2 Explanation: <input class="workspace-input hard-box text-box" style="width:300px; font-size:1rem; border:none; border-bottom:1px solid var(--text); background:transparent; color:var(--text); text-align:left; outline:none;" placeholder="What do the entries mean?">',
  memo: '<div class="memo-line">$BA = \\begin{pmatrix} 0.88 & 0 \\\\ 0 & 0.85 \\end{pmatrix} \\begin{pmatrix} 360000 & 420000 \\\\ 500000 & 560000 \\end{pmatrix}$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$= \\begin{pmatrix} 0.88 \\times 360000 & 0.88 \\times 420000 \\\\ 0.85 \\times 500000 & 0.85 \\times 560000 \\end{pmatrix}$</div><div class="memo-line">$= \\begin{pmatrix} 316\\,800 & 369\\,600 \\\\ 425\\,000 & 476\\,000 \\end{pmatrix}$ <span class="memo-mark">✓(4)</span></div><div class="memo-line">Each entry represents the <strong>dealer\'s cost</strong> (purchase price) for each car. <span class="memo-mark">✓(1)</span></div>'
},

{id:2003, topic:'Matrices & Systems of Equations',
  question:'Solve the system:<br><br>$x + y = 7$<br>$2x - y = 5$',
  markingCriteria: [
    {type:'contains', expected:['3x','x + 2x','add'], description:'Adds equations to eliminate y', marks:1},
    {type:'value', expected:12, tolerance:0.01, description:'Gets 3x = 12', marks:1},
    {type:'contains', expected:['x=4','x = 4'], description:'Finds x = 4', marks:1},
    {type:'contains', expected:['y=3','y = 3'], description:'Finds y = 3', marks:1}
  ],
  easyTemplate: '<div class="memo-line">Add equations: $(x + y) + (2x - y) = 7 + 5$ </div><div class="memo-line">$3x = @INPUT@$ </div><div class="memo-line">$x = 4$ </div><div class="memo-line">$y = 7 - 4 = 3$ </div><div class="memo-line">Check: $4 + 3 = 7$ ✓, $2(4) - 3 = \@INPUT@$ ✓</div>',
  hardTemplate: '(x, y) = (@INPUT@, @INPUT@)',
  memo: '<div class="memo-line">Add equations: $(x + y) + (2x - y) = 7 + 5$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$3x = 12$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$x = 4$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$y = 7 - 4 = 3$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">Check: $4 + 3 = 7$ ✓, $2(4) - 3 = 5$ ✓</div>'
},

{id:2004, topic:'Matrices & Systems of Equations',
  question:'Solve the system:<br><br>$4x + y = 17$<br>$x + 3y = 18$',
  markingCriteria: [
    {type:'contains', expected:['11y','- 11y','-11y'], description:'Eliminates x to get -11y or 11y', marks:1},
    {type:'value', expected:55, tolerance:0.5, description:'Gets 55 (or -55) in elimination', marks:1},
    {type:'contains', expected:['y=5','y = 5'], description:'Finds y = 5', marks:1},
    {type:'contains', expected:['x=3','x = 3'], description:'Finds x = 3', marks:1}
  ],
  easyTemplate: '<div class="memo-line">From eq2: $x = @INPUT@ - 3y$ </div><div class="memo-line">Sub into eq1: $4(@INPUT@ - 3y) + y = @INPUT@$</div><div class="memo-line">$@INPUT@ - @INPUT@y + y = @INPUT@ \\Rightarrow -@INPUT@y = -@INPUT@$ </div><div class="memo-line">$y = 5$ </div><div class="memo-line">$x = @INPUT@ - @INPUT@ = \@INPUT@$ </div>',
  hardTemplate: '(x, y) = (@INPUT@, @INPUT@)',
  memo: '<div class="memo-line">From eq2: $x = 18 - 3y$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">Sub into eq1: $4(18 - 3y) + y = 17$</div><div class="memo-line">$72 - 12y + y = 17 \\Rightarrow -11y = -55$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$y = 5$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$x = 18 - 15 = 3$ <span class="memo-mark">✓(1)</span></div>'
},

{id:2005, topic:'Matrices & Systems of Equations',
  question:'Given $A = \\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix}$ and $B = \\begin{pmatrix} 5 & 1 \\\\ 2 & 3 \\end{pmatrix}$, calculate the product $AB$.',
  markingCriteria: [
    {type:'value', expected:16, tolerance:0.01, description:'AB(1,1) = 2×5 + 3×2 = 16', marks:1},
    {type:'value', expected:11, tolerance:0.01, description:'AB(1,2) = 2×1 + 3×3 = 11', marks:1},
    {type:'value', expected:13, tolerance:0.01, description:'AB(2,1) = 1×5 + 4×2 = 13', marks:1},
    {type:'value', expected:13, tolerance:0.01, description:'AB(2,2) = 1×1 + 4×3 = 13', marks:1}
  ],
  easyTemplate: '<div class="memo-line">$AB = \\begin{pmatrix} 2(5)+3(2) & 2(1)+3(3) \\\\ 1(5)+4(2) & 1(1)+4(3) \\end{pmatrix}$</div><div class="memo-line">$= \\begin{pmatrix} \@INPUT@& @INPUT@ \\\\ @INPUT@ & @INPUT@ \\end{pmatrix}$ </div>',
  hardTemplate: '$AB = \\begin{pmatrix} @INPUT@ & @INPUT@ \\\\ @INPUT@ & @INPUT@ \\end{pmatrix}$',
  memo: '<div class="memo-line">$AB = \\begin{pmatrix} 2(5)+3(2) & 2(1)+3(3) \\\\ 1(5)+4(2) & 1(1)+4(3) \\end{pmatrix}$</div><div class="memo-line">$= \\begin{pmatrix} 16 & 11 \\\\ 13 & 13 \\end{pmatrix}$ <span class="memo-mark">✓(4)</span></div>'
},

{id:2006, topic:'Matrices & Systems of Equations',
  question:'Calculate the determinant of $A = \\begin{pmatrix} 4 & 7 \\\\ 2 & 6 \\end{pmatrix}$.',
  markingCriteria: [
    {type:'contains', expected:['4 × 6','4×6','(4)(6)','24'], description:'Calculates ad = 4 × 6 = 24', marks:1},
    {type:'contains', expected:['7 × 2','7×2','(7)(2)','14'], description:'Calculates bc = 7 × 2 = 14', marks:1},
    {type:'value', expected:10, tolerance:0.01, description:'det(A) = 24 - 14 = 10', marks:1}
  ],
  easyTemplate: '<div class="memo-line">$\\det(A) = (4 \\times 6) - (7 \\times 2)$</div><div class="memo-line">$= @INPUT@ - @INPUT@ = \@INPUT@$ </div>',
  hardTemplate: 'det(A) = @INPUT@',
  memo: '<div class="memo-line">$\\det(A) = (4 \\times 6) - (7 \\times 2)$</div><div class="memo-line">$= 24 - 14 = 10$ <span class="memo-mark">✓(1)</span></div>'
},

{id:2007, topic:'Matrices & Systems of Equations',
  question:'An investment firm offers three stock portfolios (A, B and C). The risk profile matrix shows High/Moderate/Low risk units per portfolio: <br><br>$\\begin{pmatrix} 2 & 4 & 1 \\\\ 4 & 3 & 7 \\\\ 2 & 1 & 3 \\end{pmatrix}$<br><br>A client wants 77 High, 114 Moderate, and 48 Low risk stocks. Use Gaussian elimination to determine how many of each portfolio (A, B, C) must be suggested.',
  markingCriteria: [
    {type:'contains', expected:['2a + 4b + c = 77', '2a+4b+c=77', '2 4 1 | 77'], description:'Sets up system or augmented matrix', marks:1},
    {type:'contains', expected:['c=5', 'c = 5'], description:'Finds C = 5 (or equivalent)', marks:2},
    {type:'contains', expected:['b=13', 'b = 13'], description:'Finds B = 13', marks:2},
    {type:'contains', expected:['a=10', 'a = 10'], description:'Finds A = 10', marks:2}
  ],
  easyTemplate: '<div class="memo-line">System:</div><div class="memo-line">$2A + 4B + C = @INPUT@$ </div><div class="memo-line">$4A + 3B + 7C = @INPUT@$</div><div class="memo-line">$2A + B + 3C = @INPUT@$</div><div class="memo-line">Solving gives: $A = @INPUT@$, $B = @INPUT@$, $C = \@INPUT@$ </div>',
  hardTemplate: '(x, y, z) = (@INPUT@, @INPUT@, @INPUT@)',
  memo: '<div class="memo-line">System:</div><div class="memo-line">$2A + 4B + C = 77$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$4A + 3B + 7C = 114$</div><div class="memo-line">$2A + B + 3C = 48$</div><div class="memo-line">Solving gives: $A = 10$, $B = 13$, $C = 5$ <span class="memo-mark">✓(6)</span></div>'
}

  ];
  if(!window.QUESTIONS) window.QUESTIONS=[];
  window.QUESTIONS.push(...Q);
})();
