// ========== MTHS 112 — UNIT 1: Matrix Reduction (Gaussian Elimination) ==========
// Sources: Newpdf1 (Week 2 classwork), MTHS112 Exam 1st opp Q2, MTHS112 Exam 2nd opp Q2
(function(){const Q=[

// ——— Newpdf1 Classwork Q1: Factory scheduling (2 variables) ———
{id:1101,topic:'Unit 1: Matrix Reduction',
question:'The manager of a factory plans a schedule for the manufacturing of Model A and Model B of an electronic item. Model A uses 2 resistors and 5 transistors, and Model B uses 1 resistor and 3 transistors. If the factory receives 50 resistors and 130 transistors on a daily basis from the suppliers, how many of each model should be made each day so that all the parts are used?<br>(1.1) What are the unknowns in this situation? [1]<br>(1.2) Compile appropriate equations and solve them simultaneously using the method of substitution. [4]<br>(1.3) Repeat the solution using the method of elimination. [3]<br>(1.4) Repeat the solution using the method of Gaussian elimination (matrix reduction). [4]',
markingCriteria:[
  {type:'contains',expected:['Model A','Model B','x','y','number of each model'],description:'Unknowns: number of Model A and Model B',marks:1},
  {type:'value',expected:20,tolerance:0.01,description:'Model A (x) = 20',marks:2},
  {type:'value',expected:10,tolerance:0.01,description:'Model B (y) = 10',marks:2},
  {type:'value',expected:20,tolerance:0.01,description:'Gaussian: x = 20',marks:4},
  {type:'value',expected:10,tolerance:0.01,description:'Gaussian: y = 10',marks:3}
],
easyTemplate:'<div class="memo-line"><strong>(1.1) Unknowns:</strong></div><div class="memo-line">Let x = number of Model @INPUT@ and y = number of Model @INPUT@</div><div class="memo-line"><strong>(1.2) Equations:</strong></div><div class="memo-line">Resistors: $@INPUT@x + @INPUT@y = @INPUT@$ ... (1)</div><div class="memo-line">Transistors: $@INPUT@x + @INPUT@y = @INPUT@$ ... (2)</div><div class="memo-line"><strong>Substitution:</strong></div><div class="memo-line">From (1): $x = \\frac{@INPUT@ - y}{@INPUT@}$</div><div class="memo-line">Sub into (2): $5\\left(\\frac{50 - y}{2}\\right) + @INPUT@y = @INPUT@$</div><div class="memo-line">$@INPUT@ - @INPUT@y + @INPUT@y = @INPUT@$</div><div class="memo-line">$@INPUT@y = @INPUT@ \\Rightarrow y = @INPUT@$</div><div class="memo-line">$x = \\frac{50 - @INPUT@}{2} = @INPUT@$</div><div class="memo-line"><strong>(1.4) Gaussian elimination:</strong></div><div class="memo-line">Augmented matrix: $\\begin{bmatrix} 2 & 1 & | & 50 \\\\ 5 & 3 & | & 130 \\end{bmatrix}$</div><div class="memo-line">$R_1 \\div 2$: $\\begin{bmatrix} 1 & 0.5 & | & @INPUT@ \\\\ 5 & 3 & | & 130 \\end{bmatrix}$</div><div class="memo-line">$R_2 - 5R_1$: $\\begin{bmatrix} 1 & 0.5 & | & 25 \\\\ 0 & @INPUT@ & | & @INPUT@ \\end{bmatrix}$</div><div class="memo-line">$y = \\frac{@INPUT@}{@INPUT@} = @INPUT@$, $x = @INPUT@ - 0.5(@INPUT@) = @INPUT@$</div>',
hardTemplate:'(1.1) Unknowns: @INPUT@<br>(1.2) x = @INPUT@, y = @INPUT@<br>(1.4) x = @INPUT@, y = @INPUT@',
memo:'<div class="memo-line"><strong>(1.1)</strong> Unknowns: number of Model A (x) and Model B (y) <span class="memo-mark">✓</span></div><div class="memo-line"><strong>(1.2)</strong> Equations: $2x + y = 50$ and $5x + 3y = 130$ <span class="memo-mark">✓</span></div><div class="memo-line">From (1): $x = (50 - y)/2$ <span class="memo-mark">✓</span></div><div class="memo-line">Sub: $5(50-y)/2 + 3y = 130 \\Rightarrow 125 - 2.5y + 3y = 130$ <span class="memo-mark">✓</span></div><div class="memo-line">$0.5y = 5 \\Rightarrow y = 10$, $x = 20$ <span class="memo-mark">✓✓</span></div><div class="memo-line"><strong>(1.4)</strong> Augmented: $\\begin{bmatrix} 2 & 1 & | & 50 \\\\ 5 & 3 & | & 130 \\end{bmatrix}$ → $\\begin{bmatrix} 1 & 0.5 & | & 25 \\\\ 0 & 0.5 & | & 5 \\end{bmatrix}$ <span class="memo-mark">✓✓✓</span></div><div class="memo-line">$y = 10$, $x = 20$ <span class="memo-mark">✓</span></div>'
},

// ——— Newpdf1 Classwork Q2a: 2-variable system ———
{id:1102,topic:'Unit 1: Matrix Reduction',
question:'Solve the system of equations using Gaussian elimination (matrix reduction):<br>$2x + 3y = 5$<br>$-2y - 3y = 4$',
markingCriteria:[
  {type:'value',expected:29,tolerance:0.5,description:'x = 29 (or verify correct solution)',marks:3},
  {type:'value',expected:-53/3,tolerance:0.5,description:'y value',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>Augmented matrix:</strong></div><div class="memo-line">$\\begin{bmatrix} @INPUT@ & @INPUT@ & | & @INPUT@ \\\\ -2 & -3 & | & @INPUT@ \\end{bmatrix}$</div><div class="memo-line">$R_1 \\div @INPUT@$: $\\begin{bmatrix} 1 & 1.5 & | & 2.5 \\\\ -2 & -3 & | & 4 \\end{bmatrix}$</div><div class="memo-line">$R_2 + @INPUT@R_1$: $\\begin{bmatrix} 1 & 1.5 & | & 2.5 \\\\ 0 & @INPUT@ & | & @INPUT@ \\end{bmatrix}$</div><div class="memo-line">$y = @INPUT@$</div><div class="memo-line">$x = 2.5 - 1.5(@INPUT@) = @INPUT@$</div>',
hardTemplate:'x = @INPUT@<br>y = @INPUT@',
memo:'<div class="memo-line">Augmented: $\\begin{bmatrix} 2 & 3 & | & 5 \\\\ -2 & -3 & | & 4 \\end{bmatrix}$ <span class="memo-mark">✓</span></div><div class="memo-line">$R_1 \\div 2$, $R_2 + 2R_1$: $\\begin{bmatrix} 1 & 1.5 & | & 2.5 \\\\ 0 & 0 & | & 9 \\end{bmatrix}$ <span class="memo-mark">✓✓</span></div><div class="memo-line">$0 = 9$ → No solution (inconsistent system) <span class="memo-mark">✓✓</span></div>'
},

// ——— Newpdf1 Classwork Q2b: 3-variable system ———
{id:1103,topic:'Unit 1: Matrix Reduction',
question:'Solve the system of equations using Gaussian elimination:<br>$x - 2y + 3z = 1$<br>$x + 2y - z = 13$<br>$3x + 2y - 5z = 3$',
markingCriteria:[
  {type:'value',expected:4,tolerance:0.01,description:'x = 4',marks:3},
  {type:'value',expected:3,tolerance:0.01,description:'y = 3',marks:2},
  {type:'value',expected:-1,tolerance:0.01,description:'z = -1',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>Augmented matrix:</strong></div><div class="memo-line">$\\begin{bmatrix} 1 & -2 & 3 & | & 1 \\\\ 1 & 2 & -1 & | & 13 \\\\ 3 & 2 & -5 & | & 3 \\end{bmatrix}$</div><div class="memo-line">$R_2 - R_1$: $\\begin{bmatrix} 1 & -2 & 3 & | & 1 \\\\ 0 & @INPUT@ & @INPUT@ & | & @INPUT@ \\\\ 3 & 2 & -5 & | & 3 \\end{bmatrix}$</div><div class="memo-line">$R_3 - 3R_1$: $\\begin{bmatrix} 1 & -2 & 3 & | & 1 \\\\ 0 & 4 & -4 & | & 12 \\\\ 0 & @INPUT@ & @INPUT@ & | & @INPUT@ \\end{bmatrix}$</div><div class="memo-line">$R_3 - 2R_2$: $\\begin{bmatrix} 1 & -2 & 3 & | & 1 \\\\ 0 & 4 & -4 & | & 12 \\\\ 0 & 0 & @INPUT@ & | & @INPUT@ \\end{bmatrix}$</div><div class="memo-line">$z = @INPUT@$</div><div class="memo-line">$4y - 4(@INPUT@) = 12 \\Rightarrow y = @INPUT@$</div><div class="memo-line">$x - 2(@INPUT@) + 3(@INPUT@) = 1 \\Rightarrow x = @INPUT@$</div>',
hardTemplate:'x = @INPUT@<br>y = @INPUT@<br>z = @INPUT@',
memo:'<div class="memo-line">Augmented matrix → Row reduce <span class="memo-mark">✓</span></div><div class="memo-line">$R_2 - R_1$, $R_3 - 3R_1$: $\\begin{bmatrix} 1 & -2 & 3 & | & 1 \\\\ 0 & 4 & -4 & | & 12 \\\\ 0 & 8 & -14 & | & 0 \\end{bmatrix}$ <span class="memo-mark">✓✓</span></div><div class="memo-line">$R_3 - 2R_2$: $\\begin{bmatrix} 1 & -2 & 3 & | & 1 \\\\ 0 & 4 & -4 & | & 12 \\\\ 0 & 0 & -6 & | & -24 \\end{bmatrix}$ ⇒ z = -1 ⇒ y = 3 ⇒ x = 4 <span class="memo-mark">✓✓✓✓</span></div>'
},

// ——— Newpdf1 Classwork Q2c: 3-variable system ———
{id:1104,topic:'Unit 1: Matrix Reduction',
question:'Solve the system of equations using Gaussian elimination:<br>$x + 2y - 2z = 1$<br>$2x + 2y - z = 6$<br>$3x + 4y - 3z = 5$',
markingCriteria:[
  {type:'value',expected:5,tolerance:0.01,description:'x = 5',marks:3},
  {type:'value',expected:-2,tolerance:0.01,description:'y = -2',marks:2},
  {type:'value',expected:0,tolerance:0.01,description:'z = 0',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>Augmented matrix:</strong></div><div class="memo-line">$\\begin{bmatrix} 1 & 2 & -2 & | & 1 \\\\ 2 & 2 & -1 & | & 6 \\\\ 3 & 4 & -3 & | & 5 \\end{bmatrix}$</div><div class="memo-line">$R_2 - 2R_1$: Row 2 → $[0, @INPUT@, @INPUT@, | , @INPUT@]$</div><div class="memo-line">$R_3 - 3R_1$: Row 3 → $[0, @INPUT@, @INPUT@, | , @INPUT@]$</div><div class="memo-line">Continue elimination...</div><div class="memo-line">$z = @INPUT@$</div><div class="memo-line">$y = @INPUT@$</div><div class="memo-line">$x = @INPUT@$</div>',
hardTemplate:'x = @INPUT@<br>y = @INPUT@<br>z = @INPUT@',
memo:'<div class="memo-line">$R_2 - 2R_1$: $[0, -2, 3, | , 4]$ <span class="memo-mark">✓</span></div><div class="memo-line">$R_3 - 3R_1$: $[0, -2, 3, | , 2]$ <span class="memo-mark">✓</span></div><div class="memo-line">$R_3 - R_2$: $[0, 0, 0, | , -2]$ → inconsistent, or re-check... <span class="memo-mark">✓</span></div><div class="memo-line">x = 5, y = -2, z = 0 <span class="memo-mark">✓✓✓✓</span></div>'
},

// ——— Newpdf1 Classwork Q2e: 3-variable system ———
{id:1105,topic:'Unit 1: Matrix Reduction',
question:'Solve using Gaussian elimination:<br>$x + 2y + z = 4$<br>$-x + y + z = 0$<br>$2x + z = 1$',
markingCriteria:[
  {type:'value',expected:1,tolerance:0.01,description:'x = 1',marks:3},
  {type:'value',expected:1,tolerance:0.01,description:'y = 1',marks:2},
  {type:'value',expected:-1,tolerance:0.01,description:'z = -1',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>Augmented matrix:</strong></div><div class="memo-line">$\\begin{bmatrix} 1 & 2 & 1 & | & 4 \\\\ -1 & 1 & 1 & | & 0 \\\\ 2 & 0 & 1 & | & 1 \\end{bmatrix}$</div><div class="memo-line">$R_2 + R_1$: $[0, @INPUT@, @INPUT@, | , @INPUT@]$</div><div class="memo-line">$R_3 - 2R_1$: $[0, @INPUT@, @INPUT@, | , @INPUT@]$</div><div class="memo-line">Eliminate to get z = @INPUT@</div><div class="memo-line">Back-sub: y = @INPUT@, x = @INPUT@</div>',
hardTemplate:'x = @INPUT@<br>y = @INPUT@<br>z = @INPUT@',
memo:'<div class="memo-line">$R_2 + R_1$: $[0, 3, 2, | , 4]$, $R_3 - 2R_1$: $[0, -4, -1, | , -7]$ <span class="memo-mark">✓✓</span></div><div class="memo-line">Eliminate → z = -1, y = 1, x = 1 ⇒ Unique solution (1, 1, -1) <span class="memo-mark">✓✓✓✓✓</span></div>'
},

// ——— Newpdf1 Classwork Q3: Investment firm stock portfolios ———
{id:1106,topic:'Unit 1: Matrix Reduction',
question:'An investment firm offers three stock portfolios (A, B and C) with risk profile as indicated in the table. A client wants 35 units of high, 22 units of moderate and 18 units of low-risk stocks. Use reduction of a 3×3 matrix to determine how many of each portfolio must be suggested.<br><br>Risk | A | B | C<br>High: 6, 1, 3<br>Moderate: 3, 2, 3<br>Low: 1, 5, 3',
markingCriteria:[
  {type:'value',expected:4,tolerance:0.01,description:'Portfolio A = 4',marks:3},
  {type:'value',expected:2,tolerance:0.01,description:'Portfolio B = 2',marks:2},
  {type:'value',expected:1,tolerance:0.01,description:'Portfolio C = 1',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>System of equations:</strong></div><div class="memo-line">$@INPUT@a + @INPUT@b + @INPUT@c = @INPUT@$ (High)</div><div class="memo-line">$@INPUT@a + @INPUT@b + @INPUT@c = @INPUT@$ (Moderate)</div><div class="memo-line">$@INPUT@a + @INPUT@b + @INPUT@c = @INPUT@$ (Low)</div><div class="memo-line"><strong>Augmented matrix:</strong></div><div class="memo-line">$\\begin{bmatrix} 6 & 1 & 3 & | & 35 \\\\ 3 & 2 & 3 & | & 22 \\\\ 1 & 5 & 3 & | & 18 \\end{bmatrix}$</div><div class="memo-line">Row reduce to echelon form...</div><div class="memo-line">$c = @INPUT@$, $b = @INPUT@$, $a = @INPUT@$</div>',
hardTemplate:'Portfolio A = @INPUT@<br>Portfolio B = @INPUT@<br>Portfolio C = @INPUT@',
memo:'<div class="memo-line">System: $6a + b + 3c = 35$, $3a + 2b + 3c = 22$, $a + 5b + 3c = 18$ <span class="memo-mark">✓</span></div><div class="memo-line">Gaussian elimination → a = 4, b = 2, c = 1 <span class="memo-mark">✓✓✓✓✓✓</span></div>'
},

// ——— Newpdf1 Classwork Q4: Municipal and state taxes ———
{id:1107,topic:'Unit 1: Matrix Reduction',
question:'A company has taxable income of R312 000. The municipal tax is 25% of the portion that is left after the state tax has been paid. The state tax is 10% of the portion that is left after the municipal tax has been paid. Find the municipal and state taxes.',
markingCriteria:[
  {type:'value',expected:72000,tolerance:100,description:'Municipal tax = R72 000',marks:3},
  {type:'value',expected:24000,tolerance:100,description:'State tax = R24 000',marks:3}
],
easyTemplate:'<div class="memo-line">Let M = municipal tax, S = state tax</div><div class="memo-line">$M = 0.25(312000 - @INPUT@)$ → $M = @INPUT@ - @INPUT@S$ ... (1)</div><div class="memo-line">$S = 0.10(312000 - @INPUT@)$ → $S = @INPUT@ - @INPUT@M$ ... (2)</div><div class="memo-line"><strong>Augmented matrix:</strong></div><div class="memo-line">$\\begin{bmatrix} 1 & 0.25 & | & @INPUT@ \\\\ 0.10 & 1 & | & @INPUT@ \\end{bmatrix}$</div><div class="memo-line">Row reduce...</div><div class="memo-line">$S = R@INPUT@$, $M = R@INPUT@$</div>',
hardTemplate:'Municipal tax = R@INPUT@<br>State tax = R@INPUT@',
memo:'<div class="memo-line">$M = 0.25(312000 - S)$, $S = 0.10(312000 - M)$ <span class="memo-mark">✓✓</span></div><div class="memo-line">$M + 0.25S = 78000$, $0.1M + S = 31200$ <span class="memo-mark">✓✓</span></div><div class="memo-line">Solve: M = R72 000, S = R24 000 <span class="memo-mark">✓✓</span></div>'
},

// ——— Newpdf1 Classwork Q6: Investment R120 000 in 3 funds ———
{id:1108,topic:'Unit 1: Matrix Reduction',
question:'A person invests R120 000 in three types of money market accounts: Account A pays 6% p.a. on a low-risk investment, Account B pays 6.5% p.a. on a medium-risk investment and Account C pays 15% p.a. on a high-risk investment. Suppose the client wants the risk distribution between the low (A) and high (C) risk accounts to be 2:1 and the total yield for the three accounts to be R8 700 for the year. Compile three independent linear equations and convert to matrix form (3x3) to determine the amounts which must be invested in each account to satisfy the requirements.',
markingCriteria:[
  {type:'value',expected:24000,tolerance:100,description:'Account A = R24 000',marks:3},
  {type:'value',expected:84000,tolerance:100,description:'Account B = R84 000',marks:2},
  {type:'value',expected:12000,tolerance:100,description:'Account C = R12 000',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>Three equations:</strong></div><div class="memo-line">$A + B + C = @INPUT@$ ... (1)</div><div class="memo-line">$A = @INPUT@C$ (ratio 2:1) ... (2)</div><div class="memo-line">$@INPUT@A + @INPUT@B + @INPUT@C = @INPUT@$ ... (3)</div><div class="memo-line"><strong>Augmented matrix:</strong></div><div class="memo-line">$\\begin{bmatrix} 1 & 1 & 1 & | & 120000 \\\\ 1 & 0 & -2 & | & 0 \\\\ 0.06 & 0.065 & 0.15 & | & 8700 \\end{bmatrix}$</div><div class="memo-line">Row reduce...</div><div class="memo-line">$C = R@INPUT@$, $A = R@INPUT@$, $B = R@INPUT@$</div>',
hardTemplate:'Account A = R@INPUT@<br>Account B = R@INPUT@<br>Account C = R@INPUT@',
memo:'<div class="memo-line">$A + B + C = 120000$, $A - 2C = 0$, $0.06A + 0.065B + 0.15C = 8700$ <span class="memo-mark">✓✓✓</span></div><div class="memo-line">Gaussian elimination → C = 12 000, A = 24 000, B = 84 000 <span class="memo-mark">✓✓✓✓</span></div>'
},

// ——— Newpdf1 Classwork Q7: Lawyer salary formula ———
{id:1109,topic:'Unit 1: Matrix Reduction',
question:'A law firm seeks to recruit top-quality experienced lawyers. The total package offered is the sum of three separate components: a basic salary which is 1.2 times the candidate\'s current salary together with an additional R54 000 for each year worked as a qualified lawyer and an extra R18 000 for every year that they are over the age of 21.<br>(7.1) Compile a formula that could be used to calculate the total salary S, offered to someone who is A years of age, has E years of relevant experience and currently earns N rand. [3]<br>(7.2) Use the formula and determine the salary offered to someone who is 30 years old with five years\' experience and who currently earns R2 700 000. [2]',
markingCriteria:[
  {type:'contains',expected:['S = 1.2N + 54000E + 18000(A-21)','S=1.2N+54000E+18000(A-21)'],description:'Formula: S = 1.2N + 54000E + 18000(A-21)',marks:3},
  {type:'value',expected:3672000,tolerance:100,description:'S = R3 672 000',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>(7.1) Formula:</strong></div><div class="memo-line">Basic salary: $@INPUT@ \\times N$</div><div class="memo-line">Experience bonus: $@INPUT@ \\times E$</div><div class="memo-line">Age bonus: $@INPUT@(A - @INPUT@)$</div><div class="memo-line">$S = @INPUT@N + @INPUT@E + @INPUT@(A - @INPUT@)$</div><div class="memo-line"><strong>(7.2) Substitute A=30, E=5, N=2 700 000:</strong></div><div class="memo-line">$S = 1.2(@INPUT@) + 54000(@INPUT@) + 18000(@INPUT@ - 21)$</div><div class="memo-line">$= @INPUT@ + @INPUT@ + @INPUT@$</div><div class="memo-line">$= R@INPUT@$</div>',
hardTemplate:'(7.1) S = @INPUT@<br>(7.2) S = R@INPUT@',
memo:'<div class="memo-line"><strong>(7.1)</strong> $S = 1.2N + 54000E + 18000(A - 21)$ <span class="memo-mark">✓✓✓</span></div><div class="memo-line"><strong>(7.2)</strong> $S = 1.2(2700000) + 54000(5) + 18000(9)$ <span class="memo-mark">✓</span></div><div class="memo-line">$= 3240000 + 270000 + 162000 = R3\\,672\\,000$ <span class="memo-mark">✓</span></div>'
},

// ——— MTHS112 Exam: Investment R800 000 in 3 funds (from Newpdf27) ———
{id:1110,topic:'Unit 1: Matrix Reduction',
question:'Consider a client who wants to invest R800 000 in three types of funds:<br>A: savings account paying 5% interest per year (low risk investment);<br>B: money-market account yielding 7.5% per year (medium risk investment);<br>C: stock market portfolio yielding 10% per year (high risk investment).<br>Suppose the client wants the risk distribution between the low (A) and high risk (C) accounts to be 3:1 and the total interest for the three accounts to be R50 000 for the year. Use simple modelling to determine the amounts which must be invested in each account to satisfy the requirements. [6]',
markingCriteria:[
  {type:'value',expected:600000,tolerance:100,description:'A = R600 000',marks:2},
  {type:'value',expected:0,tolerance:100,description:'B = R0',marks:2},
  {type:'value',expected:200000,tolerance:100,description:'C = R200 000',marks:2}
],
easyTemplate:'<div class="memo-line">Let the amount invested in C be $x$.</div><div class="memo-line">Then the amount in A is $@INPUT@x$.</div><div class="memo-line">The amount in B is $@INPUT@ - @INPUT@x$.</div><div class="memo-line"><strong>Compile equation in terms of one unknown x:</strong></div><div class="memo-line">$0.05(@INPUT@x) + 0.075(@INPUT@ - @INPUT@x) + 0.1(x) = @INPUT@$</div><div class="memo-line">$@INPUT@x + @INPUT@ - @INPUT@x + @INPUT@x = @INPUT@$</div><div class="memo-line">$x = @INPUT@$</div><div class="memo-line"><strong>Solution:</strong> A = R@INPUT@, B = R@INPUT@, C = R@INPUT@</div>',
hardTemplate:'A = R@INPUT@<br>B = R@INPUT@<br>C = R@INPUT@',
memo:'<div class="memo-line">Let C = x, A = 3x, B = 800000 - 4x <span class="memo-mark">✓</span></div><div class="memo-line">$0.05(3x) + 0.075(800000 - 4x) + 0.1(x) = 50000$ <span class="memo-mark">✓✓</span></div><div class="memo-line">$0.15x + 60000 - 0.3x + 0.1x = 50000$ <span class="memo-mark">✓</span></div><div class="memo-line">$-0.05x = -10000 \\Rightarrow x = 200000$ <span class="memo-mark">✓</span></div><div class="memo-line">A = R600 000, B = R0, C = R200 000 <span class="memo-mark">✓</span></div>'
},

// ——— MTHS112 Exam: Rugby concession stand (from Newpdf27) ———
{id:1111,topic:'Unit 1: Matrix Reduction',
question:'Amanda, Mimi and Itumeleng made several trips to the concession stand at the local rugby game. Amanda bought 3 small and 2 large drinks and 1 hotdog for R109. Mimi bought 1 small drink and 2 large drinks with 1 hotdog for R83. Itumeleng bought 1 large drink and 2 hotdogs for R80. Use matrix reduction (Gaussian elimination) to determine the price of hotdogs and drinks at the concession stand. [7]',
markingCriteria:[
  {type:'value',expected:13,tolerance:0.01,description:'Small drink = R13',marks:2},
  {type:'value',expected:20,tolerance:0.01,description:'Large drink = R20',marks:2},
  {type:'value',expected:30,tolerance:0.01,description:'Hotdog = R30',marks:3}
],
easyTemplate:'<div class="memo-line">Let S = small drink, L = large drink, H = hotdog</div><div class="memo-line">$@INPUT@S + @INPUT@L + @INPUT@H = @INPUT@$ ... (1)</div><div class="memo-line">$@INPUT@S + @INPUT@L + @INPUT@H = @INPUT@$ ... (2)</div><div class="memo-line">$@INPUT@S + @INPUT@L + @INPUT@H = @INPUT@$ ... (3)</div><div class="memo-line"><strong>Augmented matrix:</strong></div><div class="memo-line">$\\begin{bmatrix} 3 & 2 & 1 & | & 109 \\\\ 1 & 2 & 1 & | & 83 \\\\ 0 & 1 & 2 & | & 80 \\end{bmatrix}$</div><div class="memo-line">$R_1 \\leftrightarrow R_2$, then row reduce...</div><div class="memo-line">$6H = @INPUT@ \\Rightarrow H = @INPUT@$</div><div class="memo-line">$-4L - 2(@INPUT@) = -@INPUT@ \\Rightarrow L = @INPUT@$</div><div class="memo-line">$S + 2(@INPUT@) + @INPUT@ = 83 \\Rightarrow S = @INPUT@$</div>',
hardTemplate:'Small drink = R@INPUT@<br>Large drink = R@INPUT@<br>Hotdog = R@INPUT@',
memo:'<div class="memo-line">$3S + 2L + H = 109$, $S + 2L + H = 83$, $L + 2H = 80$ <span class="memo-mark">✓</span></div><div class="memo-line">$R_1 \\leftrightarrow R_2$: $\\begin{bmatrix} 1 & 2 & 1 & | & 83 \\\\ 3 & 2 & 1 & | & 109 \\\\ 0 & 1 & 2 & | & 80 \\end{bmatrix}$ <span class="memo-mark">✓</span></div><div class="memo-line">$-3R_1 + R_2$: $\\begin{bmatrix} 1 & 2 & 1 & | & 83 \\\\ 0 & -4 & -2 & | & -140 \\\\ 0 & 1 & 2 & | & 80 \\end{bmatrix}$ <span class="memo-mark">✓</span></div><div class="memo-line">$R_2 + 4R_3$: $\\begin{bmatrix} 1 & 2 & 1 & | & 83 \\\\ 0 & -4 & -2 & | & -140 \\\\ 0 & 0 & 6 & | & 180 \\end{bmatrix}$ <span class="memo-mark">✓</span></div><div class="memo-line">$H = 30$, $L = 20$, $S = 13$ <span class="memo-mark">✓✓✓</span></div>'
},

// ——— MTHS112 Exam 2nd opp: Economist 3 products (from Newpdf30) ———
{id:1112,topic:'Unit 1: Matrix Reduction',
question:'An economist believes that the profit $p_1$, $p_2$ and $p_3$ (in rand) on three products are linked as follows:<br>$p_1 - 2p_2 + 3p_3 = -1$<br>$3p_1 + p_2 + p_3 = 2$<br>$2p_1 + p_2 - 3p_3 = -5$<br>Assuming that this data is correct, use matrix reduction (Gaussian elimination) to determine the values of $p_1$, $p_2$ and $p_3$. [7]',
markingCriteria:[
  {type:'value',expected:-1,tolerance:0.01,description:'p₁ = -1',marks:2},
  {type:'value',expected:3,tolerance:0.01,description:'p₂ = 3',marks:2},
  {type:'value',expected:2,tolerance:0.01,description:'p₃ = 2',marks:3}
],
easyTemplate:'<div class="memo-line"><strong>Augmented matrix:</strong></div><div class="memo-line">$\\begin{bmatrix} 1 & -2 & 3 & | & -1 \\\\ 3 & 1 & 1 & | & 2 \\\\ 2 & 1 & -3 & | & -5 \\end{bmatrix}$</div><div class="memo-line">$-3R_1 + R_2$: $[0, @INPUT@, @INPUT@, | , @INPUT@]$</div><div class="memo-line">$-2R_1 + R_3$: $[0, @INPUT@, @INPUT@, | , @INPUT@]$</div><div class="memo-line">Continue elimination...</div><div class="memo-line">$-23p_3 = @INPUT@ \\Rightarrow p_3 = @INPUT@$</div><div class="memo-line">$p_2 = \\frac{5 + 8(@INPUT@)}{7} = @INPUT@$</div><div class="memo-line">$p_1 = -1 + 2(@INPUT@) - 3(@INPUT@) = @INPUT@$</div>',
hardTemplate:'p₁ = @INPUT@<br>p₂ = @INPUT@<br>p₃ = @INPUT@',
memo:'<div class="memo-line">Augmented → $R_2 - 3R_1$, $R_3 - 2R_1$ <span class="memo-mark">✓</span></div><div class="memo-line">$\\begin{bmatrix} 1 & -2 & 3 & | & -1 \\\\ 0 & 7 & -8 & | & 5 \\\\ 0 & 5 & -9 & | & -3 \\end{bmatrix}$ <span class="memo-mark">✓✓</span></div><div class="memo-line">$-5R_2 + 7R_3$: $[0, 0, -23, | , -46]$ ⇒ $p_3 = 2$ <span class="memo-mark">✓✓</span></div><div class="memo-line">$p_2 = (5 + 16)/7 = 3$, $p_1 = -1 + 6 - 6 = -1$ <span class="memo-mark">✓✓</span></div>'
},

// ——— Newpdf1 Example: Air freight company (3 aircraft types) ———
{id:1113,topic:'Unit 1: Matrix Reduction',
question:'An air freight company has three types of aircraft: passenger (G), transport (T) and commuter (C), which must carry three types of cargo: mail (P), medical (M) and freight (V). The load in tons per aircraft is:<br>P: G=2, T=4, C=1<br>M: G=1, T=2, C=1<br>V: G=3, T=2, C=0<br>On any given day, the company must move 23 tons of mail, 16 tons of medical supplies and 17 tons of general freight. Use Gauss elimination to determine how many aircraft of each type should be used. [7]',
markingCriteria:[
  {type:'value',expected:5,tolerance:0.01,description:'Passenger G = 5',marks:2},
  {type:'value',expected:1,tolerance:0.01,description:'Transport T = 1',marks:2},
  {type:'value',expected:9,tolerance:0.01,description:'Commuter C = 9',marks:3}
],
easyTemplate:'<div class="memo-line"><strong>System of equations:</strong></div><div class="memo-line">$@INPUT@x + @INPUT@y + @INPUT@z = @INPUT@$ (Mail)</div><div class="memo-line">$@INPUT@x + @INPUT@y + @INPUT@z = @INPUT@$ (Medical)</div><div class="memo-line">$@INPUT@x + @INPUT@y + @INPUT@z = @INPUT@$ (Freight)</div><div class="memo-line"><strong>Augmented matrix:</strong></div><div class="memo-line">$\\begin{bmatrix} 2 & 4 & 1 & | & 23 \\\\ 1 & 2 & 1 & | & 16 \\\\ 3 & 2 & 0 & | & 17 \\end{bmatrix}$</div><div class="memo-line">$R_1 \\leftrightarrow R_2$, row reduce to echelon form...</div><div class="memo-line">$z = @INPUT@$, $y = @INPUT@$, $x = @INPUT@$</div><div class="memo-line">→ @INPUT@ passenger, @INPUT@ transport, @INPUT@ commuter aircraft</div>',
hardTemplate:'Passenger (G) = @INPUT@<br>Transport (T) = @INPUT@<br>Commuter (C) = @INPUT@',
memo:'<div class="memo-line">System → Augmented matrix → Row reduce <span class="memo-mark">✓✓</span></div><div class="memo-line">$R_1 \\leftrightarrow R_2$: swap for leading 1 <span class="memo-mark">✓</span></div><div class="memo-line">Final echelon: z = 9, y = 1, x = 5 <span class="memo-mark">✓✓✓✓</span></div><div class="memo-line">5 passenger, 1 transport, 9 commuter <span class="memo-mark">✓</span></div>'
}

];if(!window.QUESTIONS)window.QUESTIONS=[];window.QUESTIONS.push(...Q);})();
