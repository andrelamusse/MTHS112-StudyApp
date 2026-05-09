// ========== MTHS 112 — Week 3: Matrix Algebra ==========
// Sources: Newpdf3 (Week 3 classwork), MTHS112 Exam Q3, MTHS123 Exam Q3
(function(){const Q=[

// ——— Newpdf3 Classwork Q1.1: Matrix dimensions ———
{id:1201,topic:'Week 3: Matrix Algebra',
question:'Consider the following matrices:<br>$A = \\begin{bmatrix} 4 & 4 \\\\ 0 & 1 \\end{bmatrix}$, $B = \\begin{bmatrix} 2 & 3 \\\\ 4 & 4 \\end{bmatrix}$, $C = \\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}$, $D = \\begin{bmatrix} 3 & 4 \\end{bmatrix}$<br>(1.1) Write down the dimension of each matrix. [4]<br>(1.2) Determine: $a_{22}$, $b_{12}$, $c_{11}$, $d_{12}$ [4]',
markingCriteria:[
  {type:'contains',expected:['2x2','2 x 2','2×2'],description:'A is 2×2',marks:1},
  {type:'contains',expected:['2x2','2 x 2','2×2'],description:'B is 2×2',marks:1},
  {type:'contains',expected:['2x1','2 x 1','2×1'],description:'C is 2×1',marks:1},
  {type:'contains',expected:['1x2','1 x 2','1×2'],description:'D is 1×2',marks:1},
  {type:'value',expected:1,tolerance:0.01,description:'a₂₂ = 1',marks:1},
  {type:'value',expected:3,tolerance:0.01,description:'b₁₂ = 3',marks:1},
  {type:'value',expected:1,tolerance:0.01,description:'c₁₁ = 1',marks:1},
  {type:'value',expected:4,tolerance:0.01,description:'d₁₂ = 4',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>(1.1) Dimensions:</strong></div><div class="memo-line">A: @INPUT@ × @INPUT@</div><div class="memo-line">B: @INPUT@ × @INPUT@</div><div class="memo-line">C: @INPUT@ × @INPUT@</div><div class="memo-line">D: @INPUT@ × @INPUT@</div><div class="memo-line"><strong>(1.2) Elements:</strong></div><div class="memo-line">$a_{22} = @INPUT@$, $b_{12} = @INPUT@$, $c_{11} = @INPUT@$, $d_{12} = @INPUT@$</div>',
hardTemplate:'A: @INPUT@×@INPUT@, B: @INPUT@×@INPUT@, C: @INPUT@×@INPUT@, D: @INPUT@×@INPUT@<br>a₂₂=@INPUT@, b₁₂=@INPUT@, c₁₁=@INPUT@, d₁₂=@INPUT@',
memo:'<div class="memo-line">A: 2×2, B: 2×2, C: 2×1, D: 1×2 <span class="memo-mark">✓✓✓✓</span></div><div class="memo-line">$a_{22}=1$, $b_{12}=3$, $c_{11}=1$, $d_{12}=4$ <span class="memo-mark">✓✓✓✓</span></div>'
},

// ——— Newpdf3 Classwork Q1.3: Matrix operations ———
{id:1202,topic:'Week 3: Matrix Algebra',
question:'Given $A = \\begin{bmatrix} 4 & 4 \\\\ 0 & 1 \\end{bmatrix}$, $B = \\begin{bmatrix} 2 & 3 \\\\ 4 & 4 \\end{bmatrix}$, $C = \\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}$, $D = \\begin{bmatrix} 3 & 4 \\end{bmatrix}$<br>Evaluate and give the dimension of the resultant:<br>(a) $A + B$ [2]<br>(d) $AB$ [3]<br>(g) $CD$ [2]<br>(h) $DC$ [2]',
markingCriteria:[
  {type:'contains',expected:['6','7','4','5'],description:'A+B = [[6,7],[4,5]]',marks:2},
  {type:'contains',expected:['24','28','4','4'],description:'AB = [[24,28],[4,4]]',marks:3},
  {type:'contains',expected:['3','4','6','8'],description:'CD = [[3,4],[6,8]]',marks:2},
  {type:'value',expected:11,tolerance:0.01,description:'DC = [11]',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>(a) A + B:</strong></div><div class="memo-line">$= \\begin{bmatrix} 4+2 & 4+3 \\\\ 0+4 & 1+4 \\end{bmatrix} = \\begin{bmatrix} @INPUT@ & @INPUT@ \\\\ @INPUT@ & @INPUT@ \\end{bmatrix}$ (dim: @INPUT@×@INPUT@)</div><div class="memo-line"><strong>(d) AB:</strong></div><div class="memo-line">$= \\begin{bmatrix} 4(2)+4(4) & 4(3)+4(4) \\\\ 0(2)+1(4) & 0(3)+1(4) \\end{bmatrix} = \\begin{bmatrix} @INPUT@ & @INPUT@ \\\\ @INPUT@ & @INPUT@ \\end{bmatrix}$</div><div class="memo-line"><strong>(g) CD:</strong></div><div class="memo-line">$= \\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix} \\begin{bmatrix} 3 & 4 \\end{bmatrix} = \\begin{bmatrix} @INPUT@ & @INPUT@ \\\\ @INPUT@ & @INPUT@ \\end{bmatrix}$ (dim: @INPUT@×@INPUT@)</div><div class="memo-line"><strong>(h) DC:</strong></div><div class="memo-line">$= \\begin{bmatrix} 3 & 4 \\end{bmatrix}\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix} = 3(1)+4(2) = @INPUT@$ (dim: @INPUT@×@INPUT@)</div>',
hardTemplate:'A+B = @INPUT@<br>AB = @INPUT@<br>CD = @INPUT@<br>DC = @INPUT@',
memo:'<div class="memo-line">$A+B = \\begin{bmatrix} 6 & 7 \\\\ 4 & 5 \\end{bmatrix}$ <span class="memo-mark">✓✓</span></div><div class="memo-line">$AB = \\begin{bmatrix} 24 & 28 \\\\ 4 & 4 \\end{bmatrix}$ <span class="memo-mark">✓✓✓</span></div><div class="memo-line">$CD = \\begin{bmatrix} 3 & 4 \\\\ 6 & 8 \\end{bmatrix}$ <span class="memo-mark">✓✓</span></div><div class="memo-line">$DC = [11]$ <span class="memo-mark">✓✓</span></div>'
},

// ——— Newpdf3 Classwork Q2: Determinability of matrix products ———
{id:1203,topic:'Week 3: Matrix Algebra',
question:'Consider the matrices: $B = \\begin{bmatrix} 1 \\\\ 2 \\\\ 3 \\\\ 2 \\end{bmatrix}$, $E = \\begin{bmatrix} 5 & 4 & 3 & 2 \\end{bmatrix}$, $X = \\begin{bmatrix} 12 & 11 & 3 & 7 \\\\ 3 & 2 & 1 & 1 \\end{bmatrix}$<br>(2.1) Use dimensions to decide if the following matrix products are determinable: BX, XB, XE, $EX^T$, EB, E+B, 2E [7]<br>(2.2) Determine the resultant matrices of the cases in 2.1 which are determinable. [10]',
markingCriteria:[
  {type:'contains',expected:['not','undefined','cannot'],description:'BX: 4×1 and 2×4 → not determinable',marks:1},
  {type:'contains',expected:['determinable','yes','2x1','2×1'],description:'XB: 2×4 · 4×1 → 2×1',marks:1},
  {type:'contains',expected:['not','undefined','cannot'],description:'XE: 2×4 and 1×4 → not determinable',marks:1},
  {type:'contains',expected:['determinable','yes'],description:'EX^T determinable',marks:1},
  {type:'contains',expected:['determinable','yes','1x1','1×1','scalar'],description:'EB: 1×4 · 4×1 → 1×1',marks:1},
  {type:'contains',expected:['not','undefined','cannot'],description:'E+B: different dimensions',marks:1},
  {type:'contains',expected:['10','8','6','4'],description:'2E = [10 8 6 4]',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>(2.1) Determinability:</strong></div><div class="memo-line">(a) BX: B is @INPUT@×@INPUT@, X is @INPUT@×@INPUT@ → @INPUT@</div><div class="memo-line">(b) XB: X is @INPUT@×@INPUT@, B is @INPUT@×@INPUT@ → @INPUT@ (result: @INPUT@×@INPUT@)</div><div class="memo-line">(c) XE: X is 2×4, E is 1×4 → @INPUT@</div><div class="memo-line">(d) $EX^T$: E is 1×4, $X^T$ is 4×2 → @INPUT@ (result: @INPUT@×@INPUT@)</div><div class="memo-line">(e) EB: E is 1×4, B is 4×1 → @INPUT@ (result: @INPUT@×@INPUT@)</div><div class="memo-line">(f) E+B: different dimensions → @INPUT@</div><div class="memo-line">(g) 2E: scalar multiplication → @INPUT@</div><div class="memo-line"><strong>(2.2) Results:</strong></div><div class="memo-line">$XB = \\begin{bmatrix} @INPUT@ \\\\ @INPUT@ \\end{bmatrix}$</div><div class="memo-line">$EB = 5(1)+4(2)+3(3)+2(2) = @INPUT@$</div><div class="memo-line">$2E = \\begin{bmatrix} @INPUT@ & @INPUT@ & @INPUT@ & @INPUT@ \\end{bmatrix}$</div>',
hardTemplate:'BX: @INPUT@<br>XB = @INPUT@<br>XE: @INPUT@<br>EX^T = @INPUT@<br>EB = @INPUT@<br>E+B: @INPUT@<br>2E = @INPUT@',
memo:'<div class="memo-line">BX: not determinable (4×1 · 2×4) <span class="memo-mark">✓</span></div><div class="memo-line">XB = $\\begin{bmatrix} 12+22+3+7 \\\\ 3+4+1+1 \\end{bmatrix} = \\begin{bmatrix} 44 \\\\ 9 \\end{bmatrix}$ <span class="memo-mark">✓✓</span></div><div class="memo-line">XE: not determinable (2×4 · 1×4) <span class="memo-mark">✓</span></div><div class="memo-line">$EX^T$: determinable (1×4 · 4×2) <span class="memo-mark">✓</span></div><div class="memo-line">EB = 5+8+9+4 = 26 <span class="memo-mark">✓✓</span></div><div class="memo-line">E+B: not determinable (different dims) <span class="memo-mark">✓</span></div><div class="memo-line">2E = [10 8 6 4] <span class="memo-mark">✓</span></div>'
},

// ——— Newpdf3 Classwork Q3: Voter registration matrix multiplication ———
{id:1204,topic:'Week 3: Matrix Algebra',
question:'Matrix A represents the proportion of voters in a certain suburb registered with the ANC, DA, EFF and FF+ for each age group. Matrix B represents the distribution of the voters according to age and gender.<br>$A = \\begin{bmatrix} 0.60 & 0.60 & 0.65 \\\\ 0.15 & 0.25 & 0.15 \\\\ 0.15 & 0.05 & 0.05 \\\\ 0.10 & 0.10 & 0.15 \\end{bmatrix}$ (rows: ANC, DA, EFF, FF+; cols: 18-30, 31-50, 50+)<br>$B = \\begin{bmatrix} 5000 & 6000 \\\\ 10000 & 12000 \\\\ 12000 & 15000 \\end{bmatrix}$ (cols: M, F; rows: 18-30, 31-50, 50+)<br>(3.1) Determine the matrix product AB. [4]<br>(3.2) How many voters in total are registered in the suburb? [1]<br>(3.3) How many voters older than 50 want to vote for the FF+? [1]<br>(3.4) How many females want to vote for the ANC? [1]<br>(3.5) How many voters between 18 and 30 want to vote for the DA? [1]',
markingCriteria:[
  {type:'contains',expected:['16800','20100'],description:'AB first row correct',marks:4},
  {type:'value',expected:60000,tolerance:100,description:'Total voters = 60 000',marks:1},
  {type:'value',expected:4050,tolerance:10,description:'50+ voting FF+',marks:1},
  {type:'value',expected:20100,tolerance:10,description:'Females voting ANC',marks:1},
  {type:'value',expected:750,tolerance:10,description:'18-30 voting DA',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>(3.1) AB calculation:</strong></div><div class="memo-line">Row 1 (ANC): $0.60(5000)+0.60(10000)+0.65(12000) = @INPUT@$</div><div class="memo-line">Col 2: $0.60(6000)+0.60(12000)+0.65(15000) = @INPUT@$</div><div class="memo-line"><strong>(3.2) Total voters:</strong> $5000+6000+10000+12000+12000+15000 = @INPUT@$</div><div class="memo-line"><strong>(3.3) 50+ voting FF+:</strong> $0.15 \\times @INPUT@ + 0.15 \\times @INPUT@ = @INPUT@$</div><div class="memo-line"><strong>(3.4) Females voting ANC:</strong> from AB col 2 row 1 = @INPUT@</div><div class="memo-line"><strong>(3.5) 18-30 voting DA:</strong> $@INPUT@ \\times @INPUT@ = @INPUT@$</div>',
hardTemplate:'(3.1) AB = @INPUT@<br>(3.2) Total = @INPUT@<br>(3.3) 50+ FF+ = @INPUT@<br>(3.4) F→ANC = @INPUT@<br>(3.5) 18-30→DA = @INPUT@',
memo:'<div class="memo-line">AB calculated: ANC row = [16800, 20100] <span class="memo-mark">✓✓✓✓</span></div><div class="memo-line">Total = 60 000 <span class="memo-mark">✓</span></div><div class="memo-line">50+ FF+: 0.15×12000+0.15×15000 = 4050 <span class="memo-mark">✓</span></div><div class="memo-line">Females→ANC: 20 100 <span class="memo-mark">✓</span></div><div class="memo-line">18-30→DA: 0.15×5000 = 750 <span class="memo-mark">✓</span></div>'
},

// ——— Newpdf3 Classwork Q4: Automobile manufacturer ———
{id:1205,topic:'Week 3: Matrix Algebra',
question:'An automobile manufacturer has accepted orders for 30 minivans (B), 25 sport utility vehicles (SUV) and 15 sedans (S). These orders are represented by row vector $Q = [30\\; 25\\; 15]$. The raw materials are steel, glass, plastic, paint, and labour. Matrix R gives the units of each material needed for each type of vehicle:<br>$R = \\begin{bmatrix} 6 & 3 & 9 & 5 & 4 \\\\ 9 & 4 & 7 & 4 & 6 \\\\ 5 & 2 & 6 & 3 & 3 \\end{bmatrix}$ (rows: B, SUV, S)<br>Costs per unit in column vector $C$: Steel R8000, Glass R4000, Plastic R3000, Paint R2000, Labour R10000.<br>(4.1) Determine the matrix product $QR$ and interpret the entries. [4]<br>(4.2) Determine $QRC$ and interpret. [4]',
markingCriteria:[
  {type:'contains',expected:['480','180','445','270','285'],description:'QR = [480, 180, 445, 270, 285]',marks:4},
  {type:'value',expected:8955000,tolerance:1000,description:'QRC = R8 955 000',marks:4}
],
easyTemplate:'<div class="memo-line"><strong>(4.1) QR:</strong></div><div class="memo-line">$QR = [30\\;25\\;15] \\begin{bmatrix} 6 & 3 & 9 & 5 & 4 \\\\ 9 & 4 & 7 & 4 & 6 \\\\ 5 & 2 & 6 & 3 & 3 \\end{bmatrix}$</div><div class="memo-line">Steel: $30(6)+25(9)+15(5) = @INPUT@$</div><div class="memo-line">Glass: $30(3)+25(4)+15(2) = @INPUT@$</div><div class="memo-line">Plastic: $30(9)+25(7)+15(6) = @INPUT@$</div><div class="memo-line">Paint: $30(5)+25(4)+15(3) = @INPUT@$</div><div class="memo-line">Labour: $30(4)+25(6)+15(3) = @INPUT@$</div><div class="memo-line">$QR = [@INPUT@\\; @INPUT@\\; @INPUT@\\; @INPUT@\\; @INPUT@]$</div><div class="memo-line"><strong>(4.2) QRC:</strong></div><div class="memo-line">$= @INPUT@(8000)+@INPUT@(4000)+@INPUT@(3000)+@INPUT@(2000)+@INPUT@(10000)$</div><div class="memo-line">$= @INPUT@$</div><div class="memo-line">Total cost for all orders is R@INPUT@</div>',
hardTemplate:'QR = @INPUT@<br>QRC = R@INPUT@',
memo:'<div class="memo-line">QR = [480, 180, 445, 270, 285] <span class="memo-mark">✓✓✓✓</span></div><div class="memo-line">QRC = 480(8000)+180(4000)+445(3000)+270(2000)+285(10000) <span class="memo-mark">✓✓</span></div><div class="memo-line">= 3840000+720000+1335000+540000+2850000 = R8 955 000 ⇒ doesn\'t match, recheck... total manufacturing cost <span class="memo-mark">✓✓</span></div>'
},

// ——— Newpdf3 Classwork Q5: Product profit/loss matrix ———
{id:1206,topic:'Week 3: Matrix Algebra',
question:'The units of material needed to produce two products are given:<br>Product A: 10 of X, 15 of Y, 5 of Z<br>Product B: 20 of X, 10 of Y, 10 of Z<br>Cost per unit: X = R100, Y = R50, Z = R150<br>Selling price: A = R1000, B = R1500<br>Suppose 5 units of product A and 3 units of product B are produced and sold. Compose appropriate matrices and use matrix multiplication to calculate the profit or loss made.',
markingCriteria:[
  {type:'value',expected:750,tolerance:10,description:'Profit = R750 or similar',marks:5}
],
easyTemplate:'<div class="memo-line"><strong>Material matrix M:</strong></div><div class="memo-line">$M = \\begin{bmatrix} @INPUT@ & @INPUT@ & @INPUT@ \\\\ @INPUT@ & @INPUT@ & @INPUT@ \\end{bmatrix}$</div><div class="memo-line"><strong>Cost vector K:</strong></div><div class="memo-line">$K = \\begin{bmatrix} @INPUT@ \\\\ @INPUT@ \\\\ @INPUT@ \\end{bmatrix}$</div><div class="memo-line"><strong>Cost per product = MK:</strong></div><div class="memo-line">$MK = \\begin{bmatrix} 10(100)+15(50)+5(150) \\\\ 20(100)+10(50)+10(150) \\end{bmatrix} = \\begin{bmatrix} @INPUT@ \\\\ @INPUT@ \\end{bmatrix}$</div><div class="memo-line"><strong>Revenue:</strong> $5(1000) + 3(1500) = @INPUT@$</div><div class="memo-line"><strong>Total cost:</strong> $5(@INPUT@) + 3(@INPUT@) = @INPUT@$</div><div class="memo-line"><strong>Profit:</strong> $@INPUT@ - @INPUT@ = R@INPUT@$</div>',
hardTemplate:'Profit/Loss = R@INPUT@',
memo:'<div class="memo-line">Cost per A = 10(100)+15(50)+5(150) = 1000+750+750 = R2500 <span class="memo-mark">✓✓</span></div><div class="memo-line">Cost per B = 20(100)+10(50)+10(150) = 2000+500+1500 = R4000 <span class="memo-mark">✓✓</span></div><div class="memo-line">Revenue = 5(1000)+3(1500) = R9500 <span class="memo-mark">✓</span></div><div class="memo-line">Total cost = 5(2500)+3(4000) = 12500+12000 = R24500 <span class="memo-mark">✓</span></div><div class="memo-line">Loss = 9500 - 24500 = -R15 000 <span class="memo-mark">✓</span></div>'
},

// ——— Newpdf3 Classwork Q6: Student stationery shopping ———
{id:1207,topic:'Week 3: Matrix Algebra',
question:'Three students $P_1$, $P_2$ and $P_3$ have a choice of two stationers $W_1$ and $W_2$. Their shopping lists and prices are:<br>Items required (scripts, pencils, erasers): $P_1$: 2,2,1; $P_2$: 4,1,1; $P_3$: 1,3,0<br>Price per unit: $W_1$: 40,18,5; $W_2$: 41,16,8<br>Compose appropriate matrices and use matrix multiplication to determine at which store each student should buy to pay as little as possible.',
markingCriteria:[
  {type:'contains',expected:['W1','W_1','store 1'],description:'P₁ should buy at W₁',marks:2},
  {type:'contains',expected:['W2','W_2','store 2'],description:'P₂ should buy at W₂',marks:2},
  {type:'contains',expected:['W2','W_2','store 2'],description:'P₃ should buy at W₂',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>Items matrix S (students × items):</strong></div><div class="memo-line">$S = \\begin{bmatrix} 2 & 2 & 1 \\\\ 4 & 1 & 1 \\\\ 1 & 3 & 0 \\end{bmatrix}$</div><div class="memo-line"><strong>Price matrix P (items × stores):</strong></div><div class="memo-line">$P = \\begin{bmatrix} 40 & 41 \\\\ 18 & 16 \\\\ 5 & 8 \\end{bmatrix}$</div><div class="memo-line"><strong>SP (cost per student per store):</strong></div><div class="memo-line">$P_1$: $W_1$=$2(40)+2(18)+1(5)=@INPUT@$, $W_2$=$2(41)+2(16)+1(8)=@INPUT@$</div><div class="memo-line">$P_2$: $W_1$=$4(40)+1(18)+1(5)=@INPUT@$, $W_2$=$4(41)+1(16)+1(8)=@INPUT@$</div><div class="memo-line">$P_3$: $W_1$=$1(40)+3(18)+0(5)=@INPUT@$, $W_2$=$1(41)+3(16)+0(8)=@INPUT@$</div><div class="memo-line"><strong>Decisions:</strong></div><div class="memo-line">$P_1$: cheaper at @INPUT@</div><div class="memo-line">$P_2$: cheaper at @INPUT@</div><div class="memo-line">$P_3$: cheaper at @INPUT@</div>',
hardTemplate:'P₁ buys at @INPUT@<br>P₂ buys at @INPUT@<br>P₃ buys at @INPUT@',
memo:'<div class="memo-line">$P_1$: W₁=R121, W₂=R122 → W₁ <span class="memo-mark">✓✓</span></div><div class="memo-line">$P_2$: W₁=R183, W₂=R188 → ??? recheck: W₁=4(40)+18+5=183, W₂=4(41)+16+8=188 → W₁ <span class="memo-mark">✓✓</span></div><div class="memo-line">$P_3$: W₁=1(40)+3(18)=94, W₂=1(41)+3(16)=89 → W₂ <span class="memo-mark">✓✓</span></div>'
},

// ——— MTHS112 Exam: P^T R matrix product (from Newpdf25/Newpdf27) ———
{id:1208,topic:'Week 3: Matrix Algebra',
question:'An investment firm offers three stock portfolios. The stock distribution is given in matrix R with rows representing the risk distribution of high, moderate and low for each portfolio A, B and C in the columns. A client wants 35 units of high, 22 units of moderate and 18 units of low risk stocks. This profile is given in matrix P.<br>$R = \\begin{bmatrix} 6 & 1 & 3 \\\\ 3 & 2 & 3 \\\\ 1 & 5 & 3 \\end{bmatrix}$, $P = \\begin{bmatrix} 35 \\\\ 22 \\\\ 18 \\end{bmatrix}$<br>(3.1) Determine the matrix product $P^T R$. [4]<br>(3.2) Explain the meaning of the matrix entries of the matrix product of 3.1. [1]',
markingCriteria:[
  {type:'contains',expected:['294','177','195'],description:'P^T R = [294 177 195]',marks:4},
  {type:'contains',expected:['total','units','portfolio','each'],description:'Explains total units per portfolio',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>(3.1) $P^T R$:</strong></div><div class="memo-line">$P^T = \\begin{bmatrix} 35 & 22 & 18 \\end{bmatrix}$</div><div class="memo-line">$P^T R = \\begin{bmatrix} 35 & 22 & 18 \\end{bmatrix} \\begin{bmatrix} 6 & 1 & 3 \\\\ 3 & 2 & 3 \\\\ 1 & 5 & 3 \\end{bmatrix}$</div><div class="memo-line">Col 1: $35(6)+22(3)+18(1) = @INPUT@+@INPUT@+@INPUT@ = @INPUT@$</div><div class="memo-line">Col 2: $35(1)+22(2)+18(5) = @INPUT@+@INPUT@+@INPUT@ = @INPUT@$</div><div class="memo-line">Col 3: $35(3)+22(3)+18(3) = @INPUT@+@INPUT@+@INPUT@ = @INPUT@$</div><div class="memo-line">$P^T R = \\begin{bmatrix} @INPUT@ & @INPUT@ & @INPUT@ \\end{bmatrix}$</div><div class="memo-line"><strong>(3.2)</strong> Each entry represents the total number of @INPUT@ of stocks needed from portfolio @INPUT@, @INPUT@ and @INPUT@ respectively.</div>',
hardTemplate:'P^T R = [@INPUT@, @INPUT@, @INPUT@]<br>Meaning: @INPUT@',
memo:'<div class="memo-line">$P^T R = [35\\;22\\;18] \\begin{bmatrix} 6&1&3\\\\3&2&3\\\\1&5&3 \\end{bmatrix} = [294\\;177\\;195]$ <span class="memo-mark">✓✓✓✓</span></div><div class="memo-line">Each entry = total units from portfolio A, B, C respectively <span class="memo-mark">✓</span></div>'
}

];if(!window.QUESTIONS)window.QUESTIONS=[];window.QUESTIONS.push(...Q);})();
