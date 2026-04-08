// ========== MTHS 112 — CALCULUS (Workspace Format) ==========
(function(){
  const Q = [

{id:7001, topic:'Calculus (Differentiation & Integration)',
  question:'The revenue function for USB flash drives is $R(x) = 10x + \\frac{100x}{3x+5}$.<br><br>11.1 Determine the marginal revenue function $R\'(x)$. <em>[4 marks]</em><br>11.2 Determine the marginal revenue when 15 USB flash drives are sold. <em>[2 marks]</em><br>11.3 Interpret your answer. <em>[1 mark]</em>',
  markingCriteria: [
    {type:'contains', expected:['quotient','u÷v','f÷g'], description:'Identifies quotient rule needed', marks:1},
    {type:'contains', expected:['500','(3x+5)^2','(3x+5)²'], description:'Derivative of fraction: 500 ÷ (3x+5)²', marks:2},
    {type:'contains', expected:['10 +','r\'(x) = 10'], description:'R\'(x) = 10 + 500 ÷ (3x+5)²', marks:1},
    {type:'value', expected:10.20, tolerance:0.01, description:'R\'(15) = 10 + 500 ÷ 2500 = 10.20', marks:1},
    {type:'value', expected:2500, tolerance:0.5, description:'(3×15+5)² = 50² = 2500', marks:1},
    {type:'contains', expected:['next','additional','16th','one more','extra'], description:'Interpretation: revenue from selling next unit ≈ R10.20', marks:1}
  ],
  easyTemplate: '<div class="memo-line"><strong>11.1</strong> Using quotient rule on $\\frac{100x}{3x+5}$: </div><div class="memo-line">$= \\frac{100(3x+5) - 100x(3)}{(3x+5)^2} = \\frac{@INPUT@}{(3x+5)^2}$ </div><div class="memo-line">$R\'(x) = @INPUT@ + \\frac{@INPUT@}{(3x+5)^2}$ </div><div class="memo-line"><strong>11.2</strong> $R\'(@INPUT@) = @INPUT@ + \\frac{@INPUT@}{(@INPUT@)^2} = R@INPUT@$ </div><div class="memo-line"><strong>11.3</strong> Revenue from selling the next unit ≈ R@INPUT@ </div>',
  hardTemplate: 'Final Answer: @INPUT@',
  memo: '<div class="memo-line"><strong>11.1</strong> Using quotient rule on $\\frac{100x}{3x+5}$: <span class="memo-mark">✓(1)</span></div><div class="memo-line">$= \\frac{100(3x+5) - 100x(3)}{(3x+5)^2} = \\frac{500}{(3x+5)^2}$ <span class="memo-mark">✓(2)</span></div><div class="memo-line">$R\'(x) = 10 + \\frac{500}{(3x+5)^2}$ <span class="memo-mark">✓(1)</span></div><div class="memo-line"><strong>11.2</strong> $R\'(15) = 10 + \\frac{500}{(50)^2} = 10 + 0.20 = R10.20$ <span class="memo-mark">✓(2)</span></div><div class="memo-line"><strong>11.3</strong> The expected revenue from selling the 16th unit is approximately R10.20 <span class="memo-mark">✓(1)</span></div>'
},

{id:7002, topic:'Calculus (Differentiation & Integration)',
  question:'A store\'s sales revenue changes at a rate $S\'(t) = -30t^2 + 360t$ rand/day where $t$ is days after an ad campaign ends. Determine the total sales for the first week ($t = 0$ to $t = 7$). <em>[5 marks]</em>',
  markingCriteria: [
    {type:'contains', expected:['integral','∫','integrate'], description:'Sets up definite integral', marks:1},
    {type:'contains', expected:['-10t^3','-10t³','30t^2 ÷ 3','30t² ÷ 3'], description:'Anti-derivative: -10t³', marks:1},
    {type:'contains', expected:['180t^2','180t²','360t^2 ÷ 2','360t² ÷ 2'], description:'Anti-derivative: +180t²', marks:1},
    {type:'value', expected:343, tolerance:0.5, description:'Evaluates 7³ = 343', marks:1},
    {type:'anyValue', expected:[5390, 5047], tolerance:0.5, description:'Total sales ≈ R5 390', marks:2}
  ],
  easyTemplate: '<div class="memo-line">$S = \\int_0^7 (-@INPUT@t^2 + @INPUT@t)\\,dt$ </div><div class="memo-line">$= \\left[-@INPUT@t^3 + @INPUT@t^2\\right]_0^7$ </div><div class="memo-line">$= [-@INPUT@(@INPUT@) + @INPUT@(@INPUT@)] - [0]$ </div><div class="memo-line">$= -@INPUT@ + @INPUT@ = R@INPUT@$ </div>',
  hardTemplate: 'Final Answer: @INPUT@',
  memo: '<div class="memo-line">$S = \\int_0^7 (-30t^2 + 360t)\\,dt$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$= \\left[-10t^3 + 180t^2\\right]_0^7$ <span class="memo-mark">✓(2)</span></div><div class="memo-line">$= [-10(343) + 180(49)] - [0]$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$= -3430 + 8820 = R5\\,390$ <span class="memo-mark">✓(1)</span></div>'
},

{id:7003, topic:'Calculus (Differentiation & Integration)',
  question:'The marginal average cost for producing $q$ digital watches is $\\bar{C}\'(q) = \\frac{-1000}{q^2}$.<br><br>10.1 Determine the average cost function if $\\bar{C}(100) = 25$. <em>[3 marks]</em><br>10.2 Determine the total cost function. <em>[1 mark]</em><br>10.3 What are the fixed costs? <em>[1 mark]</em>',
  markingCriteria: [
    {type:'contains', expected:['1000 ÷ q','integral'], description:'Integrates: C̄(q) = 1000 ÷ q + K', marks:1},
    {type:'value', expected:15, tolerance:0.01, description:'Finds K = 15 from C̄(100)=25', marks:1},
    {type:'contains', expected:['1000 ÷ q + 15'], description:'C̄(q) = 1000 ÷ q + 15', marks:1},
    {type:'contains', expected:['1000 + 15q','c(q) = 1000 + 15q','c = 1000 + 15q'], description:'C(q) = q × C̄(q) = 1000 + 15q', marks:1},
    {type:'contains', expected:['fixed = 1000','fixed costs = 1000','c(0) = 1000','c=1000'], description:'Fixed costs = R1 000', marks:1}
  ],
  easyTemplate: '<div class="memo-line"><strong>10.1</strong> $\\bar{C}(q) = \\int \\frac{-@INPUT@}{q^2}dq = \\frac{@INPUT@}{q} + K$ </div><div class="memo-line">$\\bar{C}(100) = \\frac{@INPUT@}{100} + K = @INPUT@ \\Rightarrow K = @INPUT@$ </div><div class="memo-line">$\\bar{C}(q) = \\frac{@INPUT@}{q} + @INPUT@$ </div><div class="memo-line"><strong>10.2</strong> $C(q) = q \\cdot \\bar{C}(q) = @INPUT@ + @INPUT@q$ </div><div class="memo-line"><strong>10.3</strong> Fixed costs $= C(0) = R@INPUT@$ </div>',
  hardTemplate: 'Final Answer: @INPUT@',
  memo: '<div class="memo-line"><strong>10.1</strong> $\\bar{C}(q) = \\int \\frac{-1000}{q^2}dq = \\frac{1000}{q} + K$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$\\bar{C}(100) = \\frac{1000}{100} + K = 25 \\Rightarrow K = 15$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$\\bar{C}(q) = \\frac{1000}{q} + 15$ <span class="memo-mark">✓(1)</span></div><div class="memo-line"><strong>10.2</strong> $C(q) = q \\cdot \\bar{C}(q) = 1000 + 15q$ <span class="memo-mark">✓(1)</span></div><div class="memo-line"><strong>10.3</strong> Fixed costs $= C(0) = R1\\,000$ <span class="memo-mark">✓(1)</span></div>'
},

{id:7004, topic:'Calculus (Differentiation & Integration)',
  question:'Find $f\'(x)$ when $f(x) = 5x^3 - 2x^2 + 4x - 1$. Evaluate at $x = 2$. <em>[3 marks]</em>',
  markingCriteria: [
    {type:'contains', expected:['15x^2','15x²'], description:'Derivative of 5x³ = 15x²', marks:1},
    {type:'contains', expected:['-4x','- 4x'], description:'Derivative of -2x² = -4x', marks:1},
    {type:'contains', expected:['+ 4','f\'(x) = 15x'], description:'Complete: f\'(x) = 15x² - 4x + 4', marks:1},
    {type:'value', expected:56, tolerance:0.1, description:'f\'(2) = 15(4) - 4(2) + 4 = 56', marks:1}
  ],
  easyTemplate: '<div class="memo-line">$f\'(x) = @INPUT@x^2 - @INPUT@x + @INPUT@$ </div><div class="memo-line">$f\'(2) = @INPUT@(4) - @INPUT@(2) + @INPUT@ = @INPUT@$ </div>',
  hardTemplate: 'Final Answer: @INPUT@',
  memo: '<div class="memo-line">$f\'(x) = 15x^2 - 4x + 4$ <span class="memo-mark">✓(2)</span></div><div class="memo-line">$f\'(2) = 15(4) - 4(2) + 4 = 60 - 8 + 4 = 56$ <span class="memo-mark">✓(1)</span></div>'
},

{id:7005, topic:'Calculus (Differentiation & Integration)',
  question:'Calculate $\\int_0^{10} (3x + 50)\\,dx$. <em>[5 marks]</em>',
  markingCriteria: [
    {type:'contains', expected:['3x^2 ÷ 2','3x² ÷ 2','1.5x^2','1.5x²'], description:'Anti-derivative: 3x² ÷ 2', marks:1},
    {type:'contains', expected:['50x','+ 50x'], description:'Anti-derivative: + 50x', marks:1},
    {type:'value', expected:150, tolerance:0.5, description:'3(100) ÷ 2 = 150', marks:1},
    {type:'value', expected:500, tolerance:0.5, description:'50(10) = 500', marks:1},
    {type:'value', expected:650, tolerance:0.5, description:'Total: 150 + 500 = 650', marks:1}
  ],
  easyTemplate: '<div class="memo-line">$\\int_0^{@INPUT@}(3x + @INPUT@)\\,dx = \\left[\\frac{3x^2}{2} + @INPUT@x\\right]_0^{@INPUT@}$ </div><div class="memo-line">$= \\frac{3(100)}{2} + @INPUT@(@INPUT@) - 0$ </div><div class="memo-line">$= @INPUT@ + @INPUT@ = @INPUT@$ </div>',
  hardTemplate: 'Final Answer: @INPUT@',
  memo: '<div class="memo-line">$\\int_0^{10}(3x + 50)\\,dx = \\left[\\frac{3x^2}{2} + 50x\\right]_0^{10}$ <span class="memo-mark">✓(2)</span></div><div class="memo-line">$= \\frac{3(100)}{2} + 50(10) - 0$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$= 150 + 500 = 650$ <span class="memo-mark">✓(2)</span></div>'
},

// ===== NEW: From 2022 Exam Q9 (Video game sales — quotient rule) =====
{id:7006, topic:'Calculus (Differentiation & Integration)',
  question:'Monthly sales of a video game are $S(t) = \\frac{200t}{t^2 + 100}$ (in thousands).<br><br>9.1 Determine $S\'(t)$ using the quotient rule. <em>[3 marks]</em><br>9.2 Determine $S(5)$ and $S\'(5)$. <em>[2 marks]</em><br>9.3 Interpret your answers in 9.2. <em>[1 mark]</em>',
  markingCriteria: [
    {type:'contains', expected:['quotient','200(t^2+100) - 200t(2t)','(t^2+100)^2'], description:'Applies quotient rule correctly', marks:1},
    {type:'contains', expected:['20000 - 200t^2','200(100 - t^2)','20000-200t²'], description:'Numerator: 20000 − 200t²', marks:1},
    {type:'value', expected:8, tolerance:0.01, description:'S(5) = 1000 ÷ 125 = 8 thousand', marks:1},
    {type:'value', expected:0.96, tolerance:0.05, description:'S\'(5) = (20000 − 5000) ÷ 15625 = 0.96', marks:1},
    {type:'contains', expected:['8000','8 000','increasing'], description:'Interpretation: 8000 games sold, rate is positive so sales increasing', marks:1}
  ],
  easyTemplate: '<div class="memo-line"><strong>9.1</strong> $S\'(t) = \\frac{200(t^2+100) - 200t(2t)}{(t^2+100)^2}$ </div><div class="memo-line">$= \\frac{@INPUT@ - @INPUT@t^2}{(t^2+100)^2}$ </div><div class="memo-line"><strong>9.2</strong> $S(5) = \\frac{@INPUT@}{125} = @INPUT@$ thousand </div><div class="memo-line">$S\'(5) = \\frac{@INPUT@}{15625} = @INPUT@$ </div><div class="memo-line"><strong>9.3</strong> @INPUT@ games sold monthly, sales increasing </div>',
  hardTemplate: 'S\'(t) = @INPUT@, S(5) = @INPUT@, S\'(5) = @INPUT@',
  memo: '<div class="memo-line"><strong>9.1</strong> $S\'(t) = \\frac{200(t^2+100) - 200t(2t)}{(t^2+100)^2} = \\frac{20000 - 200t^2}{(t^2+100)^2}$ <span class="memo-mark">✓(3)</span></div><div class="memo-line"><strong>9.2</strong> $S(5) = \\frac{1000}{125} = 8$ thousand <span class="memo-mark">✓(1)</span></div><div class="memo-line">$S\'(5) = \\frac{15000}{15625} = 0.96$ <span class="memo-mark">✓(1)</span></div><div class="memo-line"><strong>9.3</strong> 8000 games sold, sales increasing at 960 per month <span class="memo-mark">✓(1)</span></div>'
},

// ===== NEW: From 2024 2nd Opp Q12 (Integration with initial condition) =====
{id:7007, topic:'Calculus (Differentiation & Integration)',
  question:'The marginal cost function is $C\'(x) = 3x + 50$. If the fixed cost is $C(0) = 10\\,000$, determine the total cost function $C(x)$. <em>[5 marks]</em>',
  markingCriteria: [
    {type:'contains', expected:['3x^2 ÷ 2','3x² ÷ 2','1.5x^2','1.5x²'], description:'Integrates: 3x²/2', marks:1},
    {type:'contains', expected:['50x','+ 50x'], description:'Integrates: + 50x', marks:1},
    {type:'value', expected:10000, tolerance:0.5, description:'C(0) = 10 000 → K = 10 000', marks:1},
    {type:'contains', expected:['1.5x^2 + 50x + 10000','3x² ÷ 2 + 50x + 10000'], description:'C(x) = 1.5x² + 50x + 10 000', marks:2}
  ],
  easyTemplate: '<div class="memo-line">$C(x) = \\int (3x + 50)\\,dx$ </div><div class="memo-line">$= \\frac{@INPUT@x^2}{2} + @INPUT@x + K$ </div><div class="memo-line">$C(0) = @INPUT@ \\Rightarrow K = @INPUT@$ </div><div class="memo-line">$C(x) = \\frac{3x^2}{2} + 50x + @INPUT@$ </div>',
  hardTemplate: 'C(x) = @INPUT@',
  memo: '<div class="memo-line">$C(x) = \\int (3x + 50)\\,dx = \\frac{3x^2}{2} + 50x + K$ <span class="memo-mark">✓(2)</span></div><div class="memo-line">$C(0) = 10\\,000 \\Rightarrow K = 10\\,000$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$C(x) = \\frac{3x^2}{2} + 50x + 10\\,000$ <span class="memo-mark">✓(2)</span></div>'
},

// ===== NEW: From 2022 Exam Q6 (Exponential output + derivative) =====
{id:7008, topic:'Calculus (Differentiation & Integration)',
  question:'A firm\'s daily output is $q = 450(1 - e^{-0.2t})$ units.<br><br>6.1 What is the daily output after 10 days? <em>[1 mark]</em><br>6.2 After how many days will the daily output be 600 units? <em>[4 marks]</em><br>6.3 Determine the rate of change in output on the 10th day. <em>[4 marks]</em>',
  markingCriteria: [
    {type:'value', expected:389.24, tolerance:1, description:'q(10) = 450(1 − e^(−2)) ≈ 389.24', marks:1},
    {type:'contains', expected:['e^(-0.2t)','e^-0.2t'], description:'Sets up equation for part 6.2', marks:1},
    {type:'contains', expected:['ln','natural log','no solution','impossible'], description:'600 > 450 max, so no solution exists', marks:2},
    {type:'contains', expected:['90e^','0.2 × 450','chain rule'], description:'Uses chain rule: q\'(t) = 90e^(-0.2t)', marks:2},
    {type:'value', expected:12.17, tolerance:0.5, description:'q\'(10) = 90e^(-2) ≈ 12.17 units/day', marks:2}
  ],
  easyTemplate: '<div class="memo-line"><strong>6.1</strong> $q(10) = 450(1 - e^{-2}) = 450(1 - @INPUT@) = @INPUT@$ </div><div class="memo-line"><strong>6.2</strong> $600 = 450(1 - e^{-0.2t})$ → impossible since max output is 450 </div><div class="memo-line"><strong>6.3</strong> $q\'(t) = 450 \\times 0.2 \\times e^{-0.2t} = @INPUT@e^{-0.2t}$ </div><div class="memo-line">$q\'(10) = @INPUT@ \\times e^{-2} = @INPUT@$ units/day </div>',
  hardTemplate: '6.1 q(10) = @INPUT@<br>6.3 q\'(10) = @INPUT@',
  memo: '<div class="memo-line"><strong>6.1</strong> $q(10) = 450(1 - e^{-2}) = 450(1 - 0.1353) = 389.24$ <span class="memo-mark">✓(1)</span></div><div class="memo-line"><strong>6.2</strong> $600 > 450$ → no solution (max output is 450) <span class="memo-mark">✓(3)</span></div><div class="memo-line"><strong>6.3</strong> $q\'(t) = 90e^{-0.2t}$ <span class="memo-mark">✓(2)</span></div><div class="memo-line">$q\'(10) = 90e^{-2} = 12.17$ units/day <span class="memo-mark">✓(2)</span></div>'
},

// ===== NEW: Marginal revenue from demand function (2022 Q5.6) =====
{id:7009, topic:'Calculus (Differentiation & Integration)',
  question:'A firm faces demand $Q_d = 80 - 2P$. The revenue function is $R = 40q - 0.5q^2$.<br><br>Determine the marginal revenue at a production level of $q = 70$. <em>[2 marks]</em>',
  markingCriteria: [
    {type:'contains', expected:['40 - q','40 - 1.0q','r\'(q) = 40 - q','r\'(q)= 40 - q'], description:'MR = R\'(q) = 40 − q', marks:1},
    {type:'value', expected:-30, tolerance:0.1, description:'MR(70) = 40 − 70 = −30', marks:1}
  ],
  easyTemplate: '<div class="memo-line">$MR = R\'(q) = @INPUT@ - @INPUT@q$ </div><div class="memo-line">$MR(70) = @INPUT@ - @INPUT@ = @INPUT@$ </div>',
  hardTemplate: 'MR(70) = @INPUT@',
  memo: '<div class="memo-line">$MR = R\'(q) = 40 - q$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$MR(70) = 40 - 70 = -30$ <span class="memo-mark">✓(1)</span></div>'
},

  ];
  if(!window.QUESTIONS) window.QUESTIONS=[];
  window.QUESTIONS.push(...Q);
})();
