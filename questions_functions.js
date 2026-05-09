// ========== MTHS 112 — Week 6: Linear Functions (30 Questions) ==========
(function(){const Q=[

// Q1: Investment expressions (from 2024 exam Q1)
{id:6001,topic:'Week 6: Linear Functions',
question:'You have R400 000 to invest. You invest $x$ rand at 10% and the remainder at 8%.<br>1.1 Amount at 8%? 1.2 Interest on x? 1.3 Interest on remainder? 1.4 Total interest? <em>[4 marks]</em>',
markingCriteria:[
  {type:'contains',expected:['400000 - x','400 000 - x'],description:'1.1: 400000 − x',marks:1},
  {type:'contains',expected:['0.10x','0.1x'],description:'1.2: 0.10x',marks:1},
  {type:'contains',expected:['0.08(400000-x)','0.08(400 000 - x)'],description:'1.3: 0.08(400000−x)',marks:1},
  {type:'contains',expected:['0.02x + 32000','32000 + 0.02x','0.02x+32000'],description:'1.4: 0.02x + 32000',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>1.1</strong> Amount at 8% $= @INPUT@ - x$</div><div class="memo-line"><strong>1.2</strong> Interest on x $= @INPUT@ \\times x = @INPUT@x$</div><div class="memo-line"><strong>1.3</strong> Interest on remainder $= @INPUT@(@INPUT@ - x) = @INPUT@ - @INPUT@x$</div><div class="memo-line"><strong>1.4</strong> Total $= @INPUT@x + @INPUT@ - @INPUT@x = @INPUT@x + @INPUT@$</div>',
hardTemplate:'1.1: @INPUT@ 1.2: @INPUT@ 1.3: @INPUT@ 1.4: @INPUT@',
memo:'<div class="memo-line">1.1: $400000-x$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">1.2: $0.10x$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">1.3: $0.08(400000-x)$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">1.4: $0.02x + 32000$ <span class="memo-mark">✓(1)</span></div>'
},

// Q2: Demand/Supply equilibrium
{id:6002,topic:'Week 6: Linear Functions',
question:'Demand: $Q_D = 400 - 15P$. Supply: $Q_S = -50 + 10P$.<br>6.3 Find equilibrium price and quantity. <em>[3 marks]</em>',
markingCriteria:[
  {type:'contains',expected:['400 - 15p = -50 + 10p','400-15p=-50+10p'],description:'Sets QD = QS',marks:1},
  {type:'value',expected:18,tolerance:0.01,description:'P = 18',marks:1},
  {type:'value',expected:130,tolerance:0.01,description:'Q = 130',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>Set $Q_D = Q_S$:</strong></div><div class="memo-line">$@INPUT@ - @INPUT@P = -@INPUT@ + @INPUT@P$</div><div class="memo-line">$@INPUT@ + @INPUT@ = @INPUT@P + @INPUT@P$</div><div class="memo-line">$@INPUT@ = @INPUT@P$</div><div class="memo-line">$P = \\frac{@INPUT@}{@INPUT@} = @INPUT@$</div><div class="memo-line"><strong>Substitute:</strong> $Q = @INPUT@ - @INPUT@(@INPUT@) = @INPUT@ - @INPUT@ = @INPUT@$</div>',
hardTemplate:'$(P, Q) = (@INPUT@, @INPUT@)$',
memo:'<div class="memo-line">$400-15P = -50+10P \\Rightarrow 25P = 450 \\Rightarrow P = 18$ <span class="memo-mark">✓(2)</span></div><div class="memo-line">$Q = 130$ <span class="memo-mark">✓(1)</span></div>'
},

// Q3: Tax on supply — new equilibrium (from 2024 exam Q6)
{id:6003,topic:'Week 6: Linear Functions',
question:'From Q_D = 400−15P, Q_S = −50+10P, equilibrium is (18, 130). Government now imposes R5 per unit tax on suppliers.<br>6.4 Write the new supply function.<br>6.5 New equilibrium. <em>[5 marks]</em>',
markingCriteria:[
  {type:'contains',expected:['10(p-5)','10p - 100','10p-100'],description:'New Qs = 10(P−5)−50 = 10P−100',marks:2},
  {type:'value',expected:20,tolerance:0.01,description:'New P = 20',marks:1},
  {type:'value',expected:100,tolerance:0.01,description:'New Q = 100',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>6.4 New supply:</strong> Suppliers receive $(P - @INPUT@)$ per unit</div><div class="memo-line">$Q_S\' = -@INPUT@ + @INPUT@(P - @INPUT@) = -@INPUT@ + @INPUT@P - @INPUT@ = @INPUT@P - @INPUT@$</div><div class="memo-line"><strong>6.5 New equilibrium:</strong></div><div class="memo-line">$@INPUT@ - @INPUT@P = @INPUT@P - @INPUT@$</div><div class="memo-line">$@INPUT@ = @INPUT@P$</div><div class="memo-line">$P = @INPUT@$</div><div class="memo-line">$Q = @INPUT@ - @INPUT@(@INPUT@) = @INPUT@$</div>',
hardTemplate:'New supply: @INPUT@. Eq: $(P,Q) = (@INPUT@, @INPUT@)$',
memo:'<div class="memo-line">$Q_S\' = 10P - 100$ <span class="memo-mark">✓(2)</span></div><div class="memo-line">$P=20, Q=100$ <span class="memo-mark">✓(2)</span></div>'
},

// Q4: Revenue from demand (from 2024 exam Q5)
{id:6004,topic:'Week 7: Quadratic Functions',
question:'Demand: $Q = 80 - 2P$.<br>5.1 Express $P$ in terms of $Q$.<br>5.2 Show that $R = 40Q - 0.5Q^2$. <em>[4 marks]</em>',
markingCriteria:[
  {type:'contains',expected:['p = 40 - 0.5q','p=40-0.5q','p = 40 - q/2'],description:'P = 40 − 0.5Q',marks:2},
  {type:'contains',expected:['40q - 0.5q^2','40q-0.5q²','pq = (40-0.5q)q'],description:'R = 40Q − 0.5Q²',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>5.1 Rearrange Q = 80 − 2P:</strong></div><div class="memo-line">$@INPUT@P = @INPUT@ - Q$</div><div class="memo-line">$P = \\frac{@INPUT@ - Q}{@INPUT@} = @INPUT@ - @INPUT@Q$</div><div class="memo-line"><strong>5.2 Revenue = P × Q:</strong></div><div class="memo-line">$R = (@INPUT@ - @INPUT@Q) \\times Q$</div><div class="memo-line">$R = @INPUT@Q - @INPUT@Q^2$ ✓</div>',
hardTemplate:'P = @INPUT@, R = @INPUT@',
memo:'<div class="memo-line">$P = 40 - 0.5Q$ <span class="memo-mark">✓(2)</span></div><div class="memo-line">$R = PQ = 40Q - 0.5Q^2$ <span class="memo-mark">✓(2)</span></div>'
},

// Q5: Break-even (from 2024 exam Q7)
{id:6005,topic:'Week 7: Quadratic Functions',
question:'Cost: $C = 3600 + 100q + 2q^2$. Demand: $p = 500 - 2q$.<br>7.1 Revenue function. 7.2 Break-even quantity. 7.3 Maximum revenue. <em>[10 marks]</em>',
markingCriteria:[
  {type:'contains',expected:['500q - 2q^2','500q-2q²'],description:'R = 500q − 2q²',marks:2},
  {type:'anyValue',expected:[10,90],tolerance:0.5,description:'Break-even q = 10 or 90',marks:3},
  {type:'value',expected:125,tolerance:0.5,description:'Max R at q = 125',marks:2},
  {type:'value',expected:31250,tolerance:1,description:'Max R = R31 250',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>7.1 Revenue:</strong></div><div class="memo-line">$R = pq = (@INPUT@ - @INPUT@q)q = @INPUT@q - @INPUT@q^2$</div><div class="memo-line"><strong>7.2 Break-even: R = C</strong></div><div class="memo-line">$@INPUT@q - @INPUT@q^2 = @INPUT@ + @INPUT@q + @INPUT@q^2$</div><div class="memo-line">$@INPUT@q^2 - @INPUT@q + @INPUT@ = 0$ (combine and simplify)</div><div class="memo-line">$q^2 - @INPUT@q + @INPUT@ = 0$ (÷ by @INPUT@)</div><div class="memo-line">$(q - @INPUT@)(q - @INPUT@) = 0$</div><div class="memo-line">$q = @INPUT@$ or $q = @INPUT@$</div><div class="memo-line"><strong>7.3 Max revenue:</strong> $R\'(q) = @INPUT@ - @INPUT@q = 0$</div><div class="memo-line">$q = @INPUT@$, $R = @INPUT@(@INPUT@) - @INPUT@(@INPUT@)^2 = R@INPUT@$</div>',
hardTemplate:'R(q) = @INPUT@. BEP: q = @INPUT@ or @INPUT@. Max R = R@INPUT@',
memo:'<div class="memo-line">$R = 500q - 2q^2$ <span class="memo-mark">✓(2)</span></div><div class="memo-line">BEP: $q = 10$ or $90$ <span class="memo-mark">✓(3)</span></div><div class="memo-line">Max R: $q = 125$, $R = R31250$ <span class="memo-mark">✓(4)</span></div>'
},

// Q6: Cost/Revenue/Profit — linear (from 2024 exam)
{id:6006,topic:'Week 6: Linear Functions',
question:'Cost: $K(x) = 185x + 7000$. Selling price: R455/unit.<br>8.1 Revenue function. 8.2 Profit function. 8.3 Break-even. <em>[5 marks]</em>',
markingCriteria:[
  {type:'contains',expected:['455x','r = 455x','r(x) = 455x'],description:'R = 455x',marks:1},
  {type:'contains',expected:['270x - 7000','270x-7000'],description:'P = 270x − 7000',marks:2},
  {type:'anyValue',expected:[25.93,26],tolerance:0.1,description:'BEP ≈ 25.93 → 26 units',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>8.1 Revenue:</strong> $R(x) = @INPUT@ \\times x = @INPUT@x$</div><div class="memo-line"><strong>8.2 Profit = R − C:</strong></div><div class="memo-line">$P(x) = @INPUT@x - (@INPUT@x + @INPUT@)$</div><div class="memo-line">$= @INPUT@x - @INPUT@x - @INPUT@$</div><div class="memo-line">$= @INPUT@x - @INPUT@$</div><div class="memo-line"><strong>8.3 Break-even:</strong> $P(x) = 0$</div><div class="memo-line">$@INPUT@x = @INPUT@$</div><div class="memo-line">$x = \\frac{@INPUT@}{@INPUT@} = @INPUT@$</div><div class="memo-line">∴ Must sell @INPUT@ units</div>',
hardTemplate:'R = @INPUT@, P = @INPUT@, BEP = @INPUT@',
memo:'<div class="memo-line">R = 455x <span class="memo-mark">✓(1)</span></div><div class="memo-line">P = 270x − 7000 <span class="memo-mark">✓(2)</span></div><div class="memo-line">BEP ≈ 25.93 → 26 units <span class="memo-mark">✓(2)</span></div>'
},

// Q7: Demand equilibrium — different numbers
{id:6007,topic:'Week 6: Linear Functions',
question:'Demand: $Q_D = 100 - 4P$. Supply: $Q_S = -20 + 6P$. Equilibrium? <em>[3 marks]</em>',
markingCriteria:[
  {type:'value',expected:12,tolerance:0.01,description:'P = 12',marks:1},
  {type:'value',expected:52,tolerance:0.01,description:'Q = 52',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>Set $Q_D = Q_S$:</strong></div><div class="memo-line">$@INPUT@ - @INPUT@P = -@INPUT@ + @INPUT@P$</div><div class="memo-line">$@INPUT@ + @INPUT@ = @INPUT@P + @INPUT@P$</div><div class="memo-line">$@INPUT@ = @INPUT@P$</div><div class="memo-line">$P = \\frac{@INPUT@}{@INPUT@} = @INPUT@$</div><div class="memo-line">$Q = @INPUT@ - @INPUT@(@INPUT@) = @INPUT@$</div>',
hardTemplate:'$(P, Q) = (@INPUT@, @INPUT@)$',
memo:'<div class="memo-line">$10P = 120 \\Rightarrow P=12, Q=52$ <span class="memo-mark">✓(3)</span></div>'
},

// Q8: Fixed + variable cost BEP
{id:6008,topic:'Week 6: Linear Functions',
question:'Fixed costs: R15 000. Variable cost: R120/unit. Selling price: R200/unit.<br>Find BEP and profit at 250 units. <em>[4 marks]</em>',
markingCriteria:[
  {type:'value',expected:187.5,tolerance:0.5,description:'BEP = 15000÷80 = 187.5',marks:2},
  {type:'value',expected:5000,tolerance:1,description:'P(250) = 80(250)−15000 = R5 000',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>Contribution per unit:</strong> $@INPUT@ - @INPUT@ = R@INPUT@$</div><div class="memo-line"><strong>BEP:</strong> $\\frac{@INPUT@}{@INPUT@} = @INPUT@$ units</div><div class="memo-line"><strong>Profit at 250:</strong></div><div class="memo-line">$P = @INPUT@(@INPUT@) - @INPUT@ = @INPUT@ - @INPUT@ = R@INPUT@$</div>',
hardTemplate:'BEP: @INPUT@, P(250): R@INPUT@',
memo:'<div class="memo-line">BEP = 187.5 <span class="memo-mark">✓(2)</span></div><div class="memo-line">P(250) = R5 000 <span class="memo-mark">✓(2)</span></div>'
},

// Q9: Demand/Supply with subsidy
{id:6009,topic:'Week 6: Linear Functions',
question:'$Q_D = 200-5P$, $Q_S = -40+3P$. Government gives R8 subsidy per unit.<br>Find new supply function and new equilibrium. <em>[5 marks]</em>',
markingCriteria:[
  {type:'contains',expected:['3(p+8)','3p - 16','3p+24-40','3p-16'],description:'New Qs = 3(P+8)−40 = 3P−16',marks:2},
  {type:'value',expected:27,tolerance:0.01,description:'New P = 27',marks:1},
  {type:'value',expected:65,tolerance:0.01,description:'New Q = 65',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>Subsidy:</strong> Suppliers effectively get $P + @INPUT@$</div><div class="memo-line">$Q_S\' = -@INPUT@ + @INPUT@(P + @INPUT@) = @INPUT@P + @INPUT@ - @INPUT@ = @INPUT@P - @INPUT@$</div><div class="memo-line"><strong>New equilibrium:</strong></div><div class="memo-line">$@INPUT@ - @INPUT@P = @INPUT@P - @INPUT@$</div><div class="memo-line">$@INPUT@ = @INPUT@P$</div><div class="memo-line">$P = @INPUT@$, $Q = @INPUT@$</div>',
hardTemplate:'New Qs = @INPUT@. $(P,Q) = (@INPUT@, @INPUT@)$',
memo:'<div class="memo-line">$Q_S\' = 3P - 16$ <span class="memo-mark">✓(2)</span></div><div class="memo-line">$P=27, Q=65$ <span class="memo-mark">✓(2)</span></div>'
},

// Q10: Revenue maximization with calculus
{id:6010,topic:'Week 6: Linear Functions',
question:'Revenue: $R(q) = 120q - 2q^2$. Cost: $C(q) = 200 + 20q$.<br>Find profit function, profit-maximizing q, and max profit. <em>[5 marks]</em>',
markingCriteria:[
  {type:'contains',expected:['-2q^2 + 100q - 200','-2q²+100q-200','100q - 2q^2 - 200'],description:'P = −2q²+100q−200',marks:1},
  {type:'value',expected:25,tolerance:0.5,description:'q = 25',marks:2},
  {type:'value',expected:1050,tolerance:1,description:'Max P = R1 050',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>Profit = R − C:</strong></div><div class="memo-line">$P(q) = @INPUT@q - @INPUT@q^2 - @INPUT@ - @INPUT@q$</div><div class="memo-line">$= -@INPUT@q^2 + @INPUT@q - @INPUT@$</div><div class="memo-line"><strong>Max profit:</strong> $P\'(q) = -@INPUT@q + @INPUT@ = 0$</div><div class="memo-line">$q = \\frac{@INPUT@}{@INPUT@} = @INPUT@$</div><div class="memo-line">$P(@INPUT@) = -@INPUT@(@INPUT@)^2 + @INPUT@(@INPUT@) - @INPUT@$</div><div class="memo-line">$= -@INPUT@ + @INPUT@ - @INPUT@ = R@INPUT@$</div>',
hardTemplate:'q = @INPUT@, Max P = R@INPUT@',
memo:'<div class="memo-line">$P = -2q^2+100q-200$, max at $q=25$ <span class="memo-mark">✓(3)</span></div><div class="memo-line">Max P = R1050 <span class="memo-mark">✓(2)</span></div>'
},

// Q11: Consumer surplus
{id:6011,topic:'Week 6: Linear Functions',
question:'$Q_D = 500 - 10P$, $Q_S = -100 + 5P$. Find equilibrium and consumer surplus. <em>[5 marks]</em>',
markingCriteria:[
  {type:'value',expected:40,tolerance:0.01,description:'P = 40',marks:1},
  {type:'value',expected:100,tolerance:0.01,description:'Q = 100',marks:1},
  {type:'value',expected:50,tolerance:0.01,description:'Max P (Q=0): 50',marks:1},
  {type:'value',expected:500,tolerance:5,description:'CS = ½ × 100 × 10 = R500',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>Equilibrium:</strong></div><div class="memo-line">$@INPUT@ - @INPUT@P = -@INPUT@ + @INPUT@P$</div><div class="memo-line">$@INPUT@P = @INPUT@$, $P = @INPUT@$, $Q = @INPUT@$</div><div class="memo-line"><strong>Max willingness to pay (Q=0):</strong></div><div class="memo-line">$0 = @INPUT@ - @INPUT@P \\Rightarrow P = @INPUT@$</div><div class="memo-line"><strong>Consumer surplus:</strong></div><div class="memo-line">$CS = \\frac{1}{2} \\times @INPUT@ \\times (@INPUT@ - @INPUT@) = \\frac{1}{2} \\times @INPUT@ \\times @INPUT@ = R@INPUT@$</div>',
hardTemplate:'Eq: (@INPUT@, @INPUT@), CS: R@INPUT@',
memo:'<div class="memo-line">P=40, Q=100 <span class="memo-mark">✓(2)</span></div><div class="memo-line">CS = ½×100×10 = R500 <span class="memo-mark">✓(3)</span></div>'
},

// Q12: Average cost
{id:6012,topic:'Week 6: Linear Functions',
question:'Cost: $C(q) = q^2 + 10q + 100$. Find average cost at q=10 and marginal cost at q=10. <em>[4 marks]</em>',
markingCriteria:[
  {type:'value',expected:300,tolerance:0.5,description:'C(10) = 100+100+100 = 300',marks:1},
  {type:'value',expected:30,tolerance:0.01,description:'AC(10) = 300÷10 = 30',marks:1},
  {type:'value',expected:30,tolerance:0.01,description:'MC(10) = 2(10)+10 = 30',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>C(10):</strong> $(@INPUT@)^2 + @INPUT@(@INPUT@) + @INPUT@ = @INPUT@ + @INPUT@ + @INPUT@ = @INPUT@$</div><div class="memo-line"><strong>AC(10):</strong> $\\frac{@INPUT@}{@INPUT@} = R@INPUT@$ per unit</div><div class="memo-line"><strong>MC:</strong> $C\'(q) = @INPUT@q + @INPUT@$</div><div class="memo-line">$C\'(@INPUT@) = @INPUT@(@INPUT@) + @INPUT@ = @INPUT@ + @INPUT@ = R@INPUT@$</div>',
hardTemplate:'AC(10) = R@INPUT@, MC(10) = R@INPUT@',
memo:'<div class="memo-line">C(10) = 300, AC = 30 <span class="memo-mark">✓(2)</span></div><div class="memo-line">MC = 2q+10, MC(10) = 30 <span class="memo-mark">✓(2)</span></div>'
},

// Q13: Demand elasticity
{id:6013,topic:'Week 6: Linear Functions',
question:'Demand: $Q = 60 - P$. Find price elasticity at P = 20. Is demand elastic or inelastic? <em>[4 marks]</em>',
markingCriteria:[
  {type:'value',expected:40,tolerance:0.01,description:'Q(20) = 40',marks:1},
  {type:'value',expected:-0.5,tolerance:0.05,description:'Ed = (−1)(20/40) = −0.5',marks:2},
  {type:'contains',expected:['inelastic'],description:'|Ed| < 1 → inelastic',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>At P = @INPUT@:</strong> $Q = @INPUT@ - @INPUT@ = @INPUT@$</div><div class="memo-line"><strong>Elasticity:</strong> $E_d = \\frac{dQ}{dP} \\times \\frac{P}{Q}$</div><div class="memo-line">$\\frac{dQ}{dP} = @INPUT@$</div><div class="memo-line">$E_d = (@INPUT@) \\times \\frac{@INPUT@}{@INPUT@} = @INPUT@$</div><div class="memo-line">$|E_d| = @INPUT@ < 1$ → demand is @INPUT@</div>',
hardTemplate:'Ed = @INPUT@, Type: @INPUT@',
memo:'<div class="memo-line">Q=40, Ed = −0.5 <span class="memo-mark">✓(3)</span></div><div class="memo-line">Inelastic <span class="memo-mark">✓(1)</span></div>'
},

// Q14: Quadratic break-even (fixed: C=800)
{id:6014,topic:'Week 7: Quadratic Functions',
question:'Cost: $C = 800 + 20q$. Revenue: $R = 100q - q^2$. Find break-even quantities. <em>[5 marks]</em>',
markingCriteria:[
  {type:'contains',expected:['q^2 - 80q + 800','q²-80q+800'],description:'q²−80q+800 = 0',marks:1},
  {type:'anyValue',expected:[11.72,68.28],tolerance:1,description:'BEP: q ≈ 11.72 or 68.28',marks:2},
  {type:'value',expected:40,tolerance:0.5,description:'Max profit at q = 40',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>R = C:</strong> $@INPUT@q - q^2 = @INPUT@ + @INPUT@q$</div><div class="memo-line">Rearrange: $q^2 - @INPUT@q + @INPUT@ = 0$</div><div class="memo-line">$q = \\frac{@INPUT@ \\pm \\sqrt{@INPUT@^2 - 4(@INPUT@)}}{2}$</div><div class="memo-line">$= \\frac{@INPUT@ \\pm \\sqrt{@INPUT@ - @INPUT@}}{@INPUT@}$</div><div class="memo-line">$= \\frac{@INPUT@ \\pm \\sqrt{@INPUT@}}{@INPUT@}$</div><div class="memo-line">$q \\approx @INPUT@$ or $q \\approx @INPUT@$</div>',
hardTemplate:'BEP: q = @INPUT@ or @INPUT@',
memo:'<div class="memo-line">$q^2-80q+800=0$, $q \\approx 11.72$ or $68.28$ <span class="memo-mark">✓(3)</span></div><div class="memo-line">Max profit at q=40 <span class="memo-mark">✓(2)</span></div>'
},

// Q15: Demand shift
{id:6015,topic:'Week 6: Linear Functions',
question:'Original demand: $Q = 80-2P$. Demand drops by 20%. New demand function and new equilibrium with supply $Q_S = -20+3P$. <em>[5 marks]</em>',
markingCriteria:[
  {type:'contains',expected:['64 - 1.6p','64-1.6p','0.8(80-2p)'],description:'New Qd = 64 − 1.6P',marks:2},
  {type:'anyValue',expected:[18.26,18.3],tolerance:0.1,description:'New P ≈ 18.26',marks:1},
  {type:'anyValue',expected:[34.78,34.8],tolerance:0.5,description:'New Q ≈ 34.78',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>New demand = 0.8 × old:</strong></div><div class="memo-line">$Q_D\' = @INPUT@(@INPUT@ - @INPUT@P) = @INPUT@ - @INPUT@P$</div><div class="memo-line"><strong>New equilibrium:</strong> $@INPUT@ - @INPUT@P = -@INPUT@ + @INPUT@P$</div><div class="memo-line">$@INPUT@ = @INPUT@P \\Rightarrow P = @INPUT@$, $Q = @INPUT@$</div>',
hardTemplate:'New Qd = @INPUT@, $(P,Q) = (@INPUT@, @INPUT@)$',
memo:'<div class="memo-line">$Q_D\' = 64-1.6P$ <span class="memo-mark">✓(2)</span></div><div class="memo-line">P ≈ 18.26, Q ≈ 34.78 <span class="memo-mark">✓(2)</span></div>'
},

// Q16: Supply at zero
{id:6016,topic:'Week 6: Linear Functions',
question:'Supply: $Q_S = 3P - 15$. At what price does supply begin (Q=0)? What is supply at P=25? <em>[2 marks]</em>',
markingCriteria:[
  {type:'value',expected:5,tolerance:0.01,description:'P = 5',marks:1},
  {type:'value',expected:60,tolerance:0.01,description:'Qs(25) = 75−15 = 60',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>Q = 0:</strong> $0 = @INPUT@P - @INPUT@$, $P = \\frac{@INPUT@}{@INPUT@} = @INPUT@$</div><div class="memo-line"><strong>Q(25):</strong> $@INPUT@(@INPUT@) - @INPUT@ = @INPUT@ - @INPUT@ = @INPUT@$</div>',
hardTemplate:'P(Q=0) = @INPUT@, Q(25) = @INPUT@',
memo:'<div class="memo-line">P = 5, Q(25) = 60 <span class="memo-mark">✓(2)</span></div>'
},

// Q17: Revenue max from demand
{id:6017,topic:'Week 7: Quadratic Functions',
question:'Demand: $p = 300 - q$. Revenue function and max revenue. <em>[4 marks]</em>',
markingCriteria:[
  {type:'contains',expected:['300q - q^2','300q-q²'],description:'R = 300q − q²',marks:1},
  {type:'value',expected:150,tolerance:0.5,description:'Max at q = 150',marks:1},
  {type:'value',expected:22500,tolerance:1,description:'Max R = R22 500',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>Revenue:</strong> $R = pq = (@INPUT@ - q)q = @INPUT@q - q^2$</div><div class="memo-line"><strong>Max:</strong> $R\'(q) = @INPUT@ - @INPUT@q = 0$</div><div class="memo-line">$q = @INPUT@$</div><div class="memo-line">$R(@INPUT@) = @INPUT@(@INPUT@) - (@INPUT@)^2 = @INPUT@ - @INPUT@ = R@INPUT@$</div>',
hardTemplate:'R = @INPUT@, Max R = R@INPUT@ at q = @INPUT@',
memo:'<div class="memo-line">R = 300q−q², max at q=150, R=R22500 <span class="memo-mark">✓(4)</span></div>'
},

// Q18: Total revenue at equilibrium
{id:6018,topic:'Week 6: Linear Functions',
question:'$Q_D = 150-3P$, $Q_S = 2P-10$. Find equilibrium and total revenue. <em>[4 marks]</em>',
markingCriteria:[
  {type:'value',expected:32,tolerance:0.01,description:'P = 32',marks:1},
  {type:'value',expected:54,tolerance:0.01,description:'Q = 54',marks:1},
  {type:'value',expected:1728,tolerance:1,description:'TR = 32 × 54 = R1 728',marks:2}
],
easyTemplate:'<div class="memo-line">$@INPUT@ - @INPUT@P = @INPUT@P - @INPUT@$</div><div class="memo-line">$@INPUT@ = @INPUT@P \\Rightarrow P = @INPUT@$</div><div class="memo-line">$Q = @INPUT@ - @INPUT@(@INPUT@) = @INPUT@$</div><div class="memo-line">$TR = @INPUT@ \\times @INPUT@ = R@INPUT@$</div>',
hardTemplate:'P = @INPUT@, Q = @INPUT@, TR = R@INPUT@',
memo:'<div class="memo-line">P=32, Q=54, TR = R1728 <span class="memo-mark">✓(4)</span></div>'
},

// Q19: Cost from marginal cost
{id:6019,topic:'Week 6: Linear Functions',
question:'Marginal cost: $MC = 6q + 20$. Fixed costs = R500. Find total cost function. <em>[3 marks]</em>',
markingCriteria:[
  {type:'contains',expected:['3q^2','3q²'],description:'Integral of 6q = 3q²',marks:1},
  {type:'contains',expected:['3q^2 + 20q + 500','3q²+20q+500'],description:'C = 3q² + 20q + 500',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>Integrate MC:</strong></div><div class="memo-line">$C(q) = \\int(@INPUT@q + @INPUT@)dq = \\frac{@INPUT@q^2}{@INPUT@} + @INPUT@q + K$</div><div class="memo-line">$= @INPUT@q^2 + @INPUT@q + K$</div><div class="memo-line"><strong>Fixed costs:</strong> $C(0) = K = @INPUT@$</div><div class="memo-line">$C(q) = @INPUT@q^2 + @INPUT@q + @INPUT@$</div>',
hardTemplate:'C(q) = @INPUT@',
memo:'<div class="memo-line">$C = 3q^2 + 20q + 500$ <span class="memo-mark">✓(3)</span></div>'
},

// Q20: Producer surplus
{id:6020,topic:'Week 6: Linear Functions',
question:'At eq P=40, Q=100. Supply: $Q_S = -100+5P$. Min supply price (Q=0): P=20. Find producer surplus. <em>[3 marks]</em>',
markingCriteria:[
  {type:'value',expected:20,tolerance:0.01,description:'Min price = 20',marks:1},
  {type:'value',expected:1000,tolerance:5,description:'PS = ½ × 100 × (40−20) = R1 000',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>Producer surplus:</strong></div><div class="memo-line">$PS = \\frac{1}{2} \\times Q \\times (P_{eq} - P_{min})$</div><div class="memo-line">$= \\frac{1}{2} \\times @INPUT@ \\times (@INPUT@ - @INPUT@)$</div><div class="memo-line">$= \\frac{1}{2} \\times @INPUT@ \\times @INPUT@ = R@INPUT@$</div>',
hardTemplate:'PS = R@INPUT@',
memo:'<div class="memo-line">PS = ½ × 100 × 20 = R1000 <span class="memo-mark">✓(3)</span></div>'
},

// Q21: MR from R
{id:6021,topic:'Week 6: Linear Functions',
question:'$R = 40Q - 0.5Q^2$. Find marginal revenue at Q=30 and Q=70. Interpret. <em>[4 marks]</em>',
markingCriteria:[
  {type:'contains',expected:['40 - q','40-q','mr = 40 - q'],description:'MR = 40 − Q',marks:1},
  {type:'value',expected:10,tolerance:0.01,description:'MR(30) = 10',marks:1},
  {type:'value',expected:-30,tolerance:0.01,description:'MR(70) = −30',marks:1},
  {type:'contains',expected:['negative','decreas','loss','falls'],description:'MR(70) < 0: revenue decreasing',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>MR:</strong> $R\'(Q) = @INPUT@ - @INPUT@Q$</div><div class="memo-line"><strong>At Q=30:</strong> $MR = @INPUT@ - @INPUT@ = @INPUT@$ (revenue @INPUT@ per extra unit)</div><div class="memo-line"><strong>At Q=70:</strong> $MR = @INPUT@ - @INPUT@ = @INPUT@$ (revenue @INPUT@ per extra unit)</div>',
hardTemplate:'MR(30) = @INPUT@, MR(70) = @INPUT@',
memo:'<div class="memo-line">MR = 40−Q <span class="memo-mark">✓(1)</span></div><div class="memo-line">MR(30)=10, MR(70)=−30 <span class="memo-mark">✓(2)</span></div><div class="memo-line">At Q=70 revenue falls <span class="memo-mark">✓(1)</span></div>'
},

// Q22: Price floor
{id:6022,topic:'Week 6: Linear Functions',
question:'$Q_D = 200-5P$, $Q_S = -40+3P$. Gov sets floor at P=35. Find surplus/shortage. <em>[4 marks]</em>',
markingCriteria:[
  {type:'value',expected:30,tolerance:0.01,description:'Eq P = 30',marks:1},
  {type:'value',expected:25,tolerance:0.01,description:'Qd(35) = 200−175 = 25',marks:1},
  {type:'value',expected:65,tolerance:0.01,description:'Qs(35) = −40+105 = 65',marks:1},
  {type:'value',expected:40,tolerance:0.01,description:'Surplus = 65−25 = 40',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>Eq:</strong> $@INPUT@-@INPUT@P = -@INPUT@+@INPUT@P \\Rightarrow P = @INPUT@$</div><div class="memo-line"><strong>Floor P = @INPUT@ (above eq):</strong></div><div class="memo-line">$Q_D(@INPUT@) = @INPUT@ - @INPUT@(@INPUT@) = @INPUT@$</div><div class="memo-line">$Q_S(@INPUT@) = -@INPUT@ + @INPUT@(@INPUT@) = @INPUT@$</div><div class="memo-line"><strong>Surplus:</strong> $@INPUT@ - @INPUT@ = @INPUT@$ units</div>',
hardTemplate:'Eq P = @INPUT@, Surplus = @INPUT@ units',
memo:'<div class="memo-line">Eq P=30 <span class="memo-mark">✓(1)</span></div><div class="memo-line">Qd(35)=25, Qs(35)=65, surplus=40 <span class="memo-mark">✓(3)</span></div>'
},

// Q23: Profit at specific quantity
{id:6023,topic:'Week 6: Linear Functions',
question:'$R(q) = 250q$. $C(q) = 8000 + 150q$. Find BEP, profit at q=120, and loss at q=50. <em>[5 marks]</em>',
markingCriteria:[
  {type:'value',expected:80,tolerance:0.5,description:'BEP = 8000÷100 = 80',marks:1},
  {type:'value',expected:4000,tolerance:1,description:'P(120) = 100(120)−8000 = R4 000',marks:2},
  {type:'value',expected:-3000,tolerance:1,description:'P(50) = 100(50)−8000 = −R3 000',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>P(q) = R − C:</strong> $@INPUT@q - @INPUT@ - @INPUT@q = @INPUT@q - @INPUT@$</div><div class="memo-line"><strong>BEP:</strong> $@INPUT@q = @INPUT@ \\Rightarrow q = @INPUT@$</div><div class="memo-line"><strong>P(120):</strong> $@INPUT@(@INPUT@) - @INPUT@ = @INPUT@ - @INPUT@ = R@INPUT@$</div><div class="memo-line"><strong>P(50):</strong> $@INPUT@(@INPUT@) - @INPUT@ = @INPUT@ - @INPUT@ = R@INPUT@$ (loss)</div>',
hardTemplate:'BEP: @INPUT@, P(120): R@INPUT@, P(50): R@INPUT@',
memo:'<div class="memo-line">BEP=80 <span class="memo-mark">✓(1)</span></div><div class="memo-line">P(120)=R4000 <span class="memo-mark">✓(2)</span></div><div class="memo-line">P(50)=−R3000 <span class="memo-mark">✓(2)</span></div>'
},

// Q24: Equilibrium with different form
{id:6024,topic:'Week 6: Linear Functions',
question:'Demand: $P = 50 - 0.5Q$. Supply: $P = 10 + 0.5Q$. Find equilibrium. <em>[3 marks]</em>',
markingCriteria:[
  {type:'value',expected:40,tolerance:0.01,description:'Q = 40',marks:1},
  {type:'value',expected:30,tolerance:0.01,description:'P = 30',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>Set Pd = Ps:</strong></div><div class="memo-line">$@INPUT@ - @INPUT@Q = @INPUT@ + @INPUT@Q$</div><div class="memo-line">$@INPUT@ - @INPUT@ = @INPUT@Q + @INPUT@Q$</div><div class="memo-line">$@INPUT@ = @INPUT@Q$</div><div class="memo-line">$Q = @INPUT@$</div><div class="memo-line">$P = @INPUT@ + @INPUT@(@INPUT@) = @INPUT@$</div>',
hardTemplate:'$(P, Q) = (@INPUT@, @INPUT@)$',
memo:'<div class="memo-line">Q = 40, P = 30 <span class="memo-mark">✓(3)</span></div>'
},

// Q25: Marginal revenue = marginal cost
{id:6025,topic:'Week 6: Linear Functions',
question:'$R(q) = 500q - 2q^2$, $C(q) = 3600 + 100q + 2q^2$. Find output where MR = MC. <em>[4 marks]</em>',
markingCriteria:[
  {type:'contains',expected:['500 - 4q','500-4q'],description:'MR = 500 − 4q',marks:1},
  {type:'contains',expected:['100 + 4q','100+4q'],description:'MC = 100 + 4q',marks:1},
  {type:'value',expected:50,tolerance:0.5,description:'q = 50',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>MR:</strong> $R\'(q) = @INPUT@ - @INPUT@q$</div><div class="memo-line"><strong>MC:</strong> $C\'(q) = @INPUT@ + @INPUT@q$</div><div class="memo-line"><strong>MR = MC:</strong></div><div class="memo-line">$@INPUT@ - @INPUT@q = @INPUT@ + @INPUT@q$</div><div class="memo-line">$@INPUT@ = @INPUT@q$</div><div class="memo-line">$q = \\frac{@INPUT@}{@INPUT@} = @INPUT@$</div>',
hardTemplate:'q = @INPUT@',
memo:'<div class="memo-line">MR = 500−4q, MC = 100+4q <span class="memo-mark">✓(2)</span></div><div class="memo-line">8q = 400, q = 50 <span class="memo-mark">✓(2)</span></div>'
},

// Q26: Piecewise cost function
{id:6026,topic:'Week 6: Linear Functions',
question:'A company charges: first 100 units at R50/unit, next 100 at R40/unit, above 200 at R30/unit. Write cost function C(q) for q > 200 and find C(250). <em>[4 marks]</em>',
markingCriteria:[
  {type:'value',expected:5000,tolerance:1,description:'First 100: R5 000',marks:1},
  {type:'value',expected:4000,tolerance:1,description:'Next 100: R4 000',marks:1},
  {type:'value',expected:10500,tolerance:1,description:'C(250) = 5000+4000+30(50) = R10 500',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>For q > 200:</strong></div><div class="memo-line">First @INPUT@ units: $@INPUT@ \\times @INPUT@ = R@INPUT@$</div><div class="memo-line">Next @INPUT@ units: $@INPUT@ \\times @INPUT@ = R@INPUT@$</div><div class="memo-line">Remaining $(q - @INPUT@)$ units: $@INPUT@(q - @INPUT@)$</div><div class="memo-line">$C(q) = @INPUT@ + @INPUT@ + @INPUT@(q - @INPUT@)$</div><div class="memo-line"><strong>C(250):</strong> $@INPUT@ + @INPUT@ + @INPUT@(@INPUT@) = @INPUT@ + @INPUT@ = R@INPUT@$</div>',
hardTemplate:'C(250) = R@INPUT@',
memo:'<div class="memo-line">C(250) = 5000+4000+1500 = R10500 <span class="memo-mark">✓(4)</span></div>'
},

// Q27: Double tax — who pays what
{id:6027,topic:'Week 6: Linear Functions',
question:'$Q_D = 400-15P$, $Q_S = -50+10P$. Tax of R5/unit. Old eq: (18,130). New eq: (20,100).<br>How much of the tax does the consumer pay vs the producer? <em>[3 marks]</em>',
markingCriteria:[
  {type:'value',expected:2,tolerance:0.01,description:'Consumer pays R2 (20−18)',marks:1},
  {type:'value',expected:3,tolerance:0.01,description:'Producer pays R3 (5−2)',marks:1},
  {type:'contains',expected:['producer','more','60%','3'],description:'Producer bears more',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>Consumer burden:</strong> $P_{new} - P_{old} = @INPUT@ - @INPUT@ = R@INPUT@$</div><div class="memo-line"><strong>Producer burden:</strong> Tax − consumer share $= @INPUT@ - @INPUT@ = R@INPUT@$</div><div class="memo-line"><strong>Conclusion:</strong> @INPUT@ bears more of the tax</div>',
hardTemplate:'Consumer: R@INPUT@, Producer: R@INPUT@',
memo:'<div class="memo-line">Consumer R2, Producer R3 <span class="memo-mark">✓(2)</span></div><div class="memo-line">Producer bears more <span class="memo-mark">✓(1)</span></div>'
},

// Q28: Investment total interest from Q1 follow-up
{id:6028,topic:'Week 6: Linear Functions',
question:'From Q: $I = 0.02x + 32000$. If total interest is R38 000, how much was invested at 10%? <em>[2 marks]</em>',
markingCriteria:[
  {type:'value',expected:300000,tolerance:1,description:'x = (38000−32000)/0.02 = R300 000',marks:2}
],
easyTemplate:'<div class="memo-line">$@INPUT@ = @INPUT@x + @INPUT@$</div><div class="memo-line">$@INPUT@x = @INPUT@ - @INPUT@ = @INPUT@$</div><div class="memo-line">$x = \\frac{@INPUT@}{@INPUT@} = R@INPUT@$</div>',
hardTemplate:'x = R@INPUT@',
memo:'<div class="memo-line">$x = \\frac{6000}{0.02} = R300\\,000$ <span class="memo-mark">✓(2)</span></div>'
},

// Q29: Demand — find Q when P given
{id:6029,topic:'Week 6: Linear Functions',
question:'Demand: $Q_D = 80 - 2P$. Find quantity when P = 30. At what P is Q = 0? <em>[2 marks]</em>',
markingCriteria:[
  {type:'value',expected:20,tolerance:0.01,description:'Q(30) = 80−60 = 20',marks:1},
  {type:'value',expected:40,tolerance:0.01,description:'Q=0 when P=40',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>Q(30):</strong> $@INPUT@ - @INPUT@(@INPUT@) = @INPUT@ - @INPUT@ = @INPUT@$</div><div class="memo-line"><strong>Q = 0:</strong> $@INPUT@ = @INPUT@ - @INPUT@P \\Rightarrow P = \\frac{@INPUT@}{@INPUT@} = @INPUT@$</div>',
hardTemplate:'Q(30) = @INPUT@, P(Q=0) = @INPUT@',
memo:'<div class="memo-line">Q(30) = 20, P(Q=0) = 40 <span class="memo-mark">✓(2)</span></div>'
},

// Q30: Combined CS + PS
{id:6030,topic:'Week 6: Linear Functions',
question:'$Q_D = 200-5P$, $Q_S = -40+3P$. Equilibrium P=30, Q=50. Max WTP=40, Min supply price = 13.33. Find CS + PS. <em>[4 marks]</em>',
markingCriteria:[
  {type:'value',expected:250,tolerance:5,description:'CS = ½×50×(40−30) = R250',marks:2},
  {type:'anyValue',expected:[416.67,417],tolerance:2,description:'PS = ½×50×(30−13.33) ≈ R417',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>CS:</strong> $\\frac{1}{2} \\times @INPUT@ \\times (@INPUT@ - @INPUT@) = \\frac{1}{2} \\times @INPUT@ \\times @INPUT@ = R@INPUT@$</div><div class="memo-line"><strong>PS:</strong> $\\frac{1}{2} \\times @INPUT@ \\times (@INPUT@ - @INPUT@) = \\frac{1}{2} \\times @INPUT@ \\times @INPUT@ = R@INPUT@$</div><div class="memo-line"><strong>Total welfare:</strong> $R@INPUT@ + R@INPUT@ = R@INPUT@$</div>',
hardTemplate:'CS = R@INPUT@, PS = R@INPUT@',
memo:'<div class="memo-line">CS = R250, PS ≈ R417, Total ≈ R667 <span class="memo-mark">✓(4)</span></div>'
},
];if(!window.QUESTIONS)window.QUESTIONS=[];window.QUESTIONS.push(...Q);})();
