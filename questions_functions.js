// ========== MTHS 112 — FUNCTIONS, REVENUE & BREAK-EVEN (Workspace Format) ==========
(function(){
  const Q = [

{id:6001, topic:'Functions, Revenue & Break-even',
  question:'The demand and supply functions are:<br>$Q_D = -3P + 48$<br>$Q_S = 2P + 30$<br><br>6.3 Determine the market equilibrium (P and Q). <em>[2 marks]</em>',
  markingCriteria: [
    {type:'contains', expected:['-3p + 48 = 2p + 30','-3p+48=2p+30','qd = qs'], description:'Sets Qd = Qs', marks:1},
    {type:'contains', expected:['-5p','-5p = -18','5p = 18','5p=18'], description:'Collects terms: -5P = -18', marks:1},
    {type:'value', expected:3.6, tolerance:0.01, description:'Equilibrium price: P = 3.6', marks:1},
    {type:'value', expected:37.2, tolerance:0.01, description:'Equilibrium quantity: Q = 37.2', marks:1}
  ],
  easyTemplate: '<div class="memo-line">Set $Q_D = Q_S$: $-3P + @INPUT@ = 2P + @INPUT@$ </div><div class="memo-line">$-5P = -@INPUT@ \\Rightarrow P = @INPUT@$ </div><div class="memo-line">$Q = -3(@INPUT@) + @INPUT@ = -@INPUT@ + @INPUT@ = \@INPUT@$ </div>',
  hardTemplate: 'Final Answer: @INPUT@',
  memo: '<div class="memo-line">Set $Q_D = Q_S$: $-3P + 48 = 2P + 30$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$-5P = -18 \\Rightarrow P = 3.6$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$Q = -3(3.6) + 48 = -10.8 + 48 = 37.2$ <span class="memo-mark">✓(1)</span></div>'
},

{id:6002, topic:'Functions, Revenue & Break-even',
  question:'The cost function is $C = 3600 + 100q + 2q^2$ and the demand function is $p = 500 - 2q$.<br><br>7.1 Determine the revenue function $R = f(q)$. <em>[3 marks]</em><br>7.2 Determine the break-even quantity. <em>[3 marks]</em>',
  markingCriteria: [
    {type:'contains', expected:['r = p × q','r = pq','r=pq','revenue = p','r = q ×','r = q('], description:'R = P × Q', marks:1},
    {type:'contains', expected:['500q - 2q^2','500q-2q^2','500q - 2q²'], description:'R = 500q - 2q²', marks:1},
    {type:'contains', expected:['r = c','500q - 2q^2 = 3600','revenue = cost'], description:'Sets R = C for break-even', marks:1},
    {type:'contains', expected:['4q^2','4q²','-400q','q^2 - 100q'], description:'Rearranges: 4q² - 400q + 3600 = 0', marks:1},
    {type:'anyValue', expected:[10, 90], tolerance:0.1, description:'Break-even at q = 10 or q = 90', marks:2}
  ],
  easyTemplate: '<div class="memo-line"><strong>@INPUT@</strong> $R = p \\times q = (@INPUT@ - 2q)(q) = @INPUT@q - 2q^2$ </div><div class="memo-line"><strong>@INPUT@</strong> Set $R = C$: $@INPUT@q - 2q^2 = @INPUT@ + 100q + 2q^2$ </div><div class="memo-line">$0 = 4q^2 - @INPUT@q + @INPUT@$</div><div class="memo-line">$0 = q^2 - 100q + @INPUT@$ </div><div class="memo-line">$q = \\frac{100 \\pm \\sqrt{@INPUT@ - @INPUT@}}{2} = \\frac{100 \\pm @INPUT@}{2}$ </div><div class="memo-line">$q = @INPUT@$ or $q = \@INPUT@$ </div>',
  hardTemplate: '7.1 $R(q) =$ @INPUT@<br><br>7.2 Break-even $q=$ @INPUT@ or $q=$ @INPUT@',
  memo: '<div class="memo-line"><strong>7.1</strong> $R = p \\times q = (500 - 2q)(q) = 500q - 2q^2$ <span class="memo-mark">✓(3)</span></div><div class="memo-line"><strong>7.2</strong> Set $R = C$: $500q - 2q^2 = 3600 + 100q + 2q^2$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$0 = 4q^2 - 400q + 3600$</div><div class="memo-line">$0 = q^2 - 100q + 900$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$q = \\frac{100 \\pm \\sqrt{10000 - 3600}}{2} = \\frac{100 \\pm 80}{2}$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$q = 90$ or $q = 10$ <span class="memo-mark">✓(1)</span></div>'
},

{id:6003, topic:'Functions, Revenue & Break-even',
  question:'The demand equation is $Q_d = 80 - 2P$.<br><br>5.1 Determine the price per unit when 30 units are demanded. <em>[2 marks]</em>',
  markingCriteria: [
    {type:'contains', expected:['30 = 80 - 2p','30=80-2p','q = 30'], description:'Substitutes Q = 30', marks:1},
    {type:'value', expected:25, tolerance:0.01, description:'Price: P = R25', marks:1}
  ],
  easyTemplate: '<div class="memo-line">$@INPUT@ = @INPUT@ - 2P$ </div><div class="memo-line">$2P = @INPUT@$</div><div class="memo-line">$P = R\@INPUT@$ </div>',
  hardTemplate: 'Final Answer: @INPUT@',
  memo: '<div class="memo-line">$30 = 80 - 2P$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$2P = 50$</div><div class="memo-line">$P = R25$ <span class="memo-mark">✓(1)</span></div>'
},

{id:6004, topic:'Functions, Revenue & Break-even',
  question:'The demand and supply functions are $Q_D = -3P + 48$ and $Q_S = 2P + 30$. The government imposes a unit tax of R5. The new demand function becomes $Q_D\' = 1.25(-3P + 48) = -3.75P + 60$.<br><br>Determine the new equilibrium price and quantity after the tax. <em>[3 marks]</em>',
  markingCriteria: [
    {type:'contains', expected:['-3.75p + 60 = 2p + 30','-3.75p+60=2p+30'], description:'Sets new Qd = Qs', marks:1},
    {type:'value', expected:5.22, tolerance:0.01, description:'New equilibrium price ≈ 5.22', marks:1},
    {type:'value', expected:40.43, tolerance:0.01, description:'New equilibrium quantity ≈ 40.43', marks:1}
  ],
  easyTemplate: '<div class="memo-line">Set $Q_D\' = Q_S$: $-@INPUT@P + @INPUT@ = 2P + @INPUT@$ </div><div class="memo-line">$-@INPUT@P = -@INPUT@ \\Rightarrow P = @INPUT@$ </div><div class="memo-line">$Q = 2(@INPUT@) + @INPUT@ = \@INPUT@$ </div>',
  hardTemplate: 'Final Answer: @INPUT@',
  memo: '<div class="memo-line">Set $Q_D\' = Q_S$: $-3.75P + 60 = 2P + 30$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$-5.75P = -30 \\Rightarrow P = 5.22$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$Q = 2(5.22) + 30 = 40.43$ <span class="memo-mark">✓(1)</span></div>'
},

{id:6006, topic:'Functions, Revenue & Break-even',
  question:'The demand and supply functions of a product are given by:<br>$Q_D = 400 - 15P$<br>$Q_S = -50 + 10P$<br><br>6.3 Determine the market equilibrium (P and Q). <em>[2 marks]</em><br>6.4 The government imposes a unit tax of R5 on each good. Determine the new supply function $Q_S^{\\prime}$. <em>[2 marks]</em><br>6.5 Determine the new market equilibrium (P and Q). <em>[3 marks]</em>',
  markingCriteria: [
    {type:'contains', expected:['p=18', 'p = 18'], description:'Original Equilibrium Price = 18', marks:1},
    {type:'contains', expected:['q=130', 'q = 130'], description:'Original Equilibrium Quantity = 130', marks:1},
    {type:'contains', expected:['10(p - 5)','10(p-5)','10p - 100','10p-100','-100 + 10p'], description:'New Supply: Qs\' = 10P - 100', marks:2},
    {type:'contains', expected:['p=20', 'p = 20'], description:'New Equilibrium Price = 20', marks:1},
    {type:'contains', expected:['q=100', 'q = 100'], description:'New Equilibrium Quantity = 100', marks:2}
  ],
  easyTemplate: '<div class="memo-line"><strong>@INPUT@</strong> $@INPUT@ - @INPUT@P = -@INPUT@ + @INPUT@P \\Rightarrow @INPUT@P = @INPUT@ \\Rightarrow P = @INPUT@$ </div><div class="memo-line">$Q = @INPUT@ - @INPUT@(@INPUT@) = @INPUT@$ </div><div class="memo-line"><strong>@INPUT@</strong> With tax, producers receive $(P-5)$:</div><div class="memo-line">$Q_S^{\\prime} = -@INPUT@ + @INPUT@(P - 5) = @INPUT@P - 100$ </div><div class="memo-line"><strong>@INPUT@</strong> $@INPUT@ - @INPUT@P = @INPUT@P - 100 \\Rightarrow @INPUT@P = @INPUT@ \\Rightarrow P = @INPUT@$ </div><div class="memo-line">$Q = @INPUT@ - @INPUT@(@INPUT@) = \@INPUT@$ </div>',
  hardTemplate: '6.3 $P = R$@INPUT@, $Q =$ @INPUT@<br><br>6.4 $Q_S\' =$ @INPUT@<br><br>6.5 $P = R$@INPUT@, $Q =$ @INPUT@',
  memo: '<div class="memo-line"><strong>6.3</strong> $400 - 15P = -50 + 10P \\Rightarrow 25P = 450 \\Rightarrow P = 18$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$Q = 400 - 15(18) = 130$ <span class="memo-mark">✓(1)</span></div><div class="memo-line"><strong>6.4</strong> With tax, producers receive $(P-5)$:</div><div class="memo-line">$Q_S^{\\prime} = -50 + 10(P - 5) = 10P - 100$ <span class="memo-mark">✓(2)</span></div><div class="memo-line"><strong>6.5</strong> $400 - 15P = 10P - 100 \\Rightarrow 25P = 500 \\Rightarrow P = 20$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$Q = 400 - 15(20) = 100$ <span class="memo-mark">✓(2)</span></div>'
},

// ===== NEW: From 2024 2nd Opp Q1 (Cost, Revenue, Profit functions) =====
{id:6007, topic:'Functions, Revenue & Break-even',
  question:'A company manufactures products with cost $K(x) = 185x + 7000$ and sells them for R455 each.<br><br>1.2 Determine the revenue function $R(x)$. <em>[1 mark]</em><br>1.3 Determine the profit function $P(x) = R(x) - K(x)$. <em>[2 marks]</em>',
  markingCriteria: [
    {type:'contains', expected:['455x','r(x) = 455x','r = 455x'], description:'Revenue: R(x) = 455x', marks:1},
    {type:'contains', expected:['270x - 7000','455x - 185x - 7000'], description:'Profit: P(x) = 270x - 7000', marks:1},
    {type:'value', expected:7000, tolerance:1, description:'Fixed cost identified: R7 000', marks:1}
  ],
  easyTemplate: '<div class="memo-line"><strong>1.2</strong> $R(x) = @INPUT@ \\times x = @INPUT@x$ </div><div class="memo-line"><strong>1.3</strong> $P(x) = @INPUT@x - (@INPUT@x + @INPUT@)$ </div><div class="memo-line">$= @INPUT@x - @INPUT@$ </div>',
  hardTemplate: 'R(x) = @INPUT@<br>P(x) = @INPUT@',
  memo: '<div class="memo-line"><strong>1.2</strong> $R(x) = 455x$ <span class="memo-mark">✓(1)</span></div><div class="memo-line"><strong>1.3</strong> $P(x) = 455x - (185x + 7000) = 270x - 7000$ <span class="memo-mark">✓(2)</span></div>'
},

// ===== NEW: From 2024 2nd Opp Q7 (Revenue = 300q - q²) =====
{id:6008, topic:'Functions, Revenue & Break-even',
  question:'The demand function for a product is $p = 300 - q$ where $p$ is the price and $q$ is quantity sold.<br><br>7.1 Determine the revenue function $R = f(q)$. <em>[2 marks]</em><br>7.2 What does $q$ represent and what does $(300 - q)$ represent? <em>[1 mark]</em>',
  markingCriteria: [
    {type:'contains', expected:['r = pq','r = p × q','revenue = price × quantity'], description:'Revenue = Price × Quantity', marks:1},
    {type:'contains', expected:['300q - q^2','300q - q²','q(300 - q)','q(300-q)'], description:'R = 300q − q²', marks:1},
    {type:'contains', expected:['units','number of units','quantity','price'], description:'q = units sold, (300−q) = price expression', marks:1}
  ],
  easyTemplate: '<div class="memo-line"><strong>7.1</strong> $R = p \\times q = (@INPUT@ - q) \\times q$ </div><div class="memo-line">$= @INPUT@q - q^2$ </div><div class="memo-line"><strong>7.2</strong> $q =$ @INPUT@, $(300 - q) =$ @INPUT@ </div>',
  hardTemplate: 'R(q) = @INPUT@',
  memo: '<div class="memo-line"><strong>7.1</strong> $R = p \\times q = (300 - q) \\times q = 300q - q^2$ <span class="memo-mark">✓(2)</span></div><div class="memo-line"><strong>7.2</strong> $q$ = number of units sold, $(300 - q)$ = price per unit <span class="memo-mark">✓(1)</span></div>'
},

// ===== NEW: From 2022 Q5.4 (Show revenue function from demand) =====
{id:6009, topic:'Functions, Revenue & Break-even',
  question:'The demand equation is $Q_d = 80 - 2P$.<br><br>Show that the revenue function is $R = 40q - 0.5q^2$. <em>[2 marks]</em>',
  markingCriteria: [
    {type:'contains', expected:['p = 40 - 0.5q','p = 40 - q÷2','p=40-0.5q'], description:'Rearranges: P = 40 − 0.5Q', marks:1},
    {type:'contains', expected:['r = pq','r = q(40 - 0.5q)','40q - 0.5q^2','40q-0.5q²'], description:'R = Q × P = 40Q − 0.5Q²', marks:1}
  ],
  easyTemplate: '<div class="memo-line">Rearrange demand: $Q = 80 - 2P \\Rightarrow P = @INPUT@ - @INPUT@Q$ </div><div class="memo-line">$R = P \\times Q = (@INPUT@ - @INPUT@Q) \\times Q = @INPUT@Q - @INPUT@Q^2$ ✓ </div>',
  hardTemplate: 'R = @INPUT@',
  memo: '<div class="memo-line">From $Q = 80 - 2P$: $P = 40 - 0.5Q$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$R = PQ = (40 - 0.5Q)Q = 40Q - 0.5Q^2$ <span class="memo-mark">✓(1)</span></div>'
},

// ===== NEW: Break-even from profit function =====
{id:6010, topic:'Functions, Revenue & Break-even',
  question:'A company\'s profit function is $P(x) = 270x - 7000$. Determine the break-even quantity and interpret the result. <em>[3 marks]</em>',
  markingCriteria: [
    {type:'contains', expected:['p(x) = 0','270x - 7000 = 0','270x = 7000'], description:'Sets P(x) = 0 for break-even', marks:1},
    {type:'value', expected:25.93, tolerance:0.1, description:'x = 7000 ÷ 270 ≈ 25.93', marks:1},
    {type:'contains', expected:['26','must sell at least','minimum'], description:'Must sell at least 26 units to make a profit', marks:1}
  ],
  easyTemplate: '<div class="memo-line">$P(x) = 0$: $270x - 7000 = 0$ </div><div class="memo-line">$x = \\frac{@INPUT@}{@INPUT@} = @INPUT@$ </div><div class="memo-line">Must sell at least @INPUT@ units to break even </div>',
  hardTemplate: 'Break-even: x = @INPUT@',
  memo: '<div class="memo-line">$270x - 7000 = 0$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$x = \\frac{7000}{270} = 25.93$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">Must sell at least 26 units to be profitable <span class="memo-mark">✓(1)</span></div>'
}

  ];
  if(!window.QUESTIONS) window.QUESTIONS=[];
  window.QUESTIONS.push(...Q);
})();
