// ========== MTHS 112 — Week 5: Application of Functions ==========
// Sources: Newpdf5 (Week 5 classwork — concept of a function)
(function(){const Q=[

// ——— Q1: Function identification ———
{id:1401,topic:'Week 5: Application of Functions',
question:'Which of the following are functions and why?<br>(a) $\\{(1,1),(2,3),(3,5)\\}$ [1]<br>(b) $\\{(1,1),(2,3),(2,5)\\}$ [1]<br>(c) $y = x^2$ [1]<br>(d) $y^2 = x$ [1]<br>(e) $f(x) = 3x + 4$ [1]',
markingCriteria:[
  {type:'contains',expected:['yes','function'],description:'(a) is a function',marks:1},
  {type:'contains',expected:['not','no'],description:'(b) is NOT a function (2 maps to both 3 and 5)',marks:1},
  {type:'contains',expected:['yes','function'],description:'(c) is a function',marks:1},
  {type:'contains',expected:['not','no'],description:'(d) is NOT a function (fails vertical line test)',marks:1},
  {type:'contains',expected:['yes','function'],description:'(e) is a function',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>(a)</strong> $\\{(1,1),(2,3),(3,5)\\}$ — each x-value maps to exactly one y-value → @INPUT@</div><div class="memo-line"><strong>(b)</strong> $\\{(1,1),(2,3),(2,5)\\}$ — $x = @INPUT@$ maps to @INPUT@ different y-values → @INPUT@</div><div class="memo-line"><strong>(c)</strong> $y = x^2$ — passes vertical line test → @INPUT@</div><div class="memo-line"><strong>(d)</strong> $y^2 = x$ → $y = \\pm\\sqrt{x}$, one x gives @INPUT@ y-values → @INPUT@</div><div class="memo-line"><strong>(e)</strong> $f(x) = 3x + 4$ — linear function → @INPUT@</div>',
hardTemplate:'(a) @INPUT@<br>(b) @INPUT@<br>(c) @INPUT@<br>(d) @INPUT@<br>(e) @INPUT@',
memo:'<div class="memo-line">(a) Function ✓ (b) Not a function (x=2 repeats) ✓ (c) Function ✓ (d) Not a function ✓ (e) Function ✓ <span class="memo-mark">✓✓✓✓✓</span></div>'
},

// ——— Q2: Domain and range ———
{id:1402,topic:'Week 5: Application of Functions',
question:'Determine the domain and range of the following functions:<br>(a) $f(x) = 3x + 4$ [2]<br>(b) $g(x) = \\sqrt{x - 2}$ [2]<br>(c) $h(x) = \\frac{1}{x+3}$ [2]<br>(d) $k(x) = x^2 - 9$ [2]',
markingCriteria:[
  {type:'contains',expected:['all real','(-∞,∞)','R'],description:'(a) Domain: all reals',marks:1},
  {type:'contains',expected:['all real','(-∞,∞)','R'],description:'(a) Range: all reals',marks:1},
  {type:'contains',expected:['x ≥ 2','[2,∞)'],description:'(b) Domain: x ≥ 2',marks:1},
  {type:'contains',expected:['y ≥ 0','[0,∞)'],description:'(b) Range: y ≥ 0',marks:1},
  {type:'contains',expected:['x ≠ -3'],description:'(c) Domain: x ≠ -3',marks:1},
  {type:'contains',expected:['y ≠ 0'],description:'(c) Range: y ≠ 0',marks:1},
  {type:'contains',expected:['all real','(-∞,∞)','R'],description:'(d) Domain: all reals',marks:1},
  {type:'contains',expected:['y ≥ -9','[-9,∞)'],description:'(d) Range: y ≥ -9',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>(a) $f(x) = 3x + 4$:</strong> Domain: @INPUT@, Range: @INPUT@</div><div class="memo-line"><strong>(b) $g(x) = \\sqrt{x-2}$:</strong> Domain: $x \\geq @INPUT@$, Range: $y \\geq @INPUT@$</div><div class="memo-line"><strong>(c) $h(x) = \\frac{1}{x+3}$:</strong> Domain: $x \\neq @INPUT@$, Range: $y \\neq @INPUT@$</div><div class="memo-line"><strong>(d) $k(x) = x^2 - 9$:</strong> Domain: @INPUT@, Range: $y \\geq @INPUT@$</div>',
hardTemplate:'(a) D: @INPUT@, R: @INPUT@<br>(b) D: @INPUT@, R: @INPUT@<br>(c) D: @INPUT@, R: @INPUT@<br>(d) D: @INPUT@, R: @INPUT@',
memo:'<div class="memo-line">(a) D: all reals, R: all reals <span class="memo-mark">✓✓</span></div><div class="memo-line">(b) D: x ≥ 2, R: y ≥ 0 <span class="memo-mark">✓✓</span></div><div class="memo-line">(c) D: x ≠ -3, R: y ≠ 0 <span class="memo-mark">✓✓</span></div><div class="memo-line">(d) D: all reals, R: y ≥ -9 <span class="memo-mark">✓✓</span></div>'
},

// ——— Q3: Function evaluation ———
{id:1403,topic:'Week 5: Application of Functions',
question:'If $f(x) = 2x^2 - 3x + 1$, determine:<br>(a) $f(0)$ [1]<br>(b) $f(-1)$ [2]<br>(c) $f(a)$ [2]<br>(d) $f(2a)$ [2]<br>(e) $f(a+h)$ [3]',
markingCriteria:[
  {type:'value',expected:1,tolerance:0.01,description:'f(0) = 1',marks:1},
  {type:'value',expected:6,tolerance:0.01,description:'f(-1) = 6',marks:2},
  {type:'contains',expected:['2a²','2a^2'],description:'f(a) = 2a²-3a+1',marks:2},
  {type:'contains',expected:['8a²','8a^2'],description:'f(2a) = 8a²-6a+1',marks:2},
  {type:'contains',expected:['2a²','2ah','h²'],description:'f(a+h) = 2a²+4ah+2h²-3a-3h+1',marks:3}
],
easyTemplate:'<div class="memo-line"><strong>(a)</strong> $f(0) = 2(0)^2 - 3(0) + 1 = @INPUT@$</div><div class="memo-line"><strong>(b)</strong> $f(-1) = 2(-1)^2 - 3(-1) + 1 = @INPUT@ + @INPUT@ + @INPUT@ = @INPUT@$</div><div class="memo-line"><strong>(c)</strong> $f(a) = 2(@INPUT@)^2 - 3(@INPUT@) + 1 = @INPUT@$</div><div class="memo-line"><strong>(d)</strong> $f(2a) = 2(@INPUT@)^2 - 3(@INPUT@) + 1 = @INPUT@a^2 - @INPUT@a + 1$</div><div class="memo-line"><strong>(e)</strong> $f(a+h) = 2(a+h)^2 - 3(a+h) + 1$</div><div class="memo-line">$= 2(a^2 + @INPUT@ah + h^2) - @INPUT@a - @INPUT@h + 1$</div><div class="memo-line">$= @INPUT@a^2 + @INPUT@ah + @INPUT@h^2 - @INPUT@a - @INPUT@h + 1$</div>',
hardTemplate:'f(0) = @INPUT@<br>f(-1) = @INPUT@<br>f(a) = @INPUT@<br>f(2a) = @INPUT@<br>f(a+h) = @INPUT@',
memo:'<div class="memo-line">$f(0) = 1$ <span class="memo-mark">✓</span></div><div class="memo-line">$f(-1) = 2+3+1 = 6$ <span class="memo-mark">✓✓</span></div><div class="memo-line">$f(a) = 2a^2-3a+1$ <span class="memo-mark">✓✓</span></div><div class="memo-line">$f(2a) = 8a^2-6a+1$ <span class="memo-mark">✓✓</span></div><div class="memo-line">$f(a+h) = 2a^2+4ah+2h^2-3a-3h+1$ <span class="memo-mark">✓✓✓</span></div>'
},

// ——— Q6: Composite function ———
{id:1404,topic:'Week 5: Application of Functions',
question:'Assume the number of units manufactured per day, $q$, is a function of the number of employees $m$, and the total revenue $r$ is a function of the number of units $q$:<br>$q(m) = \\frac{40m - m^2}{4}$ and $r(q) = 40q$<br>(6.1) Determine $(r \\circ q)(m)$. [2]<br>(6.3) Determine the income if there are 30 employees. [2]<br>(6.4) Determine the level of production if there are 30 employees. [1]<br>(6.5) Determine the price per unit produced. [1]',
markingCriteria:[
  {type:'contains',expected:['10(40m - m²)','400m - 10m²','10(40m-m^2)'],description:'(r∘q)(m) = 10(40m-m²)',marks:2},
  {type:'value',expected:3000,tolerance:10,description:'Income at m=30: R3000',marks:2},
  {type:'value',expected:75,tolerance:1,description:'q(30) = 75 units',marks:1},
  {type:'value',expected:40,tolerance:1,description:'Price per unit = R40',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>(6.1)</strong> $(r \\circ q)(m) = r(q(m)) = 40 \\cdot \\frac{@INPUT@m - m^2}{@INPUT@}$</div><div class="memo-line">$= \\frac{@INPUT@(40m - m^2)}{4} = @INPUT@(@INPUT@m - m^2)$</div><div class="memo-line"><strong>(6.3)</strong> Income at $m = 30$:</div><div class="memo-line">$(r \\circ q)(30) = 10(40(30) - (30)^2) = 10(@INPUT@ - @INPUT@) = 10(@INPUT@) = @INPUT@$</div><div class="memo-line"><strong>(6.4)</strong> $q(30) = \\frac{40(30) - 30^2}{4} = \\frac{@INPUT@ - @INPUT@}{4} = \\frac{@INPUT@}{4} = @INPUT@$</div><div class="memo-line"><strong>(6.5)</strong> Price per unit $= \\frac{r}{q} = R@INPUT@$</div>',
hardTemplate:'(6.1) (r∘q)(m) = @INPUT@<br>(6.3) Income = R@INPUT@<br>(6.4) q(30) = @INPUT@<br>(6.5) Price per unit = R@INPUT@',
memo:'<div class="memo-line">$(r \\circ q)(m) = 40 \\cdot \\frac{40m-m^2}{4} = 10(40m-m^2) = 400m - 10m^2$ <span class="memo-mark">✓✓</span></div><div class="memo-line">$(r \\circ q)(30) = 400(30)-10(900) = 12000-9000 = R3000$ <span class="memo-mark">✓✓</span></div><div class="memo-line">$q(30) = (1200-900)/4 = 75$ units <span class="memo-mark">✓</span></div><div class="memo-line">Price per unit = 40q/q = R40 <span class="memo-mark">✓</span></div>'
},

// ——— Q7: Piecewise tax function ———
{id:1405,topic:'Week 5: Application of Functions',
question:'Assume that a person with a salary less than R70 000 p.a. is exempted from paying income tax. From R70 000 to R150 000, income tax is payable as a percentage of 10% of the annual income, and above R150 000 a fixed amount of R15 000 plus 20% of the income above R150 000 is payable.<br>(7) Write the income tax $T$ as a piecewise defined function of income $x$. [3]<br>(7.2) Determine the amount of tax payable if the income is R250 000. [2]',
markingCriteria:[
  {type:'contains',expected:['0','70000','70 000'],description:'T=0 if x ≤ 70000',marks:1},
  {type:'contains',expected:['0.1','10%','0.10x'],description:'T=0.1x if 70000 < x ≤ 150000',marks:1},
  {type:'contains',expected:['15000','0.2','150000'],description:'T=15000+0.2(x-150000) if x > 150000',marks:1},
  {type:'value',expected:35000,tolerance:100,description:'T(250000) = R35 000',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>Piecewise function:</strong></div><div class="memo-line">$T(x) = @INPUT@$ if $x \\leq @INPUT@$</div><div class="memo-line">$T(x) = @INPUT@x$ if $@INPUT@ < x \\leq @INPUT@$</div><div class="memo-line">$T(x) = @INPUT@ + @INPUT@(x - @INPUT@)$ if $x > @INPUT@$</div><div class="memo-line"><strong>(7.2)</strong> $T(250000) = @INPUT@ + @INPUT@(@INPUT@ - @INPUT@)$</div><div class="memo-line">$= @INPUT@ + @INPUT@(@INPUT@) = @INPUT@ + @INPUT@ = R@INPUT@$</div>',
hardTemplate:'T(x) = @INPUT@<br>T(250000) = R@INPUT@',
memo:'<div class="memo-line">$T(x) = 0$ if $x \\leq 70000$ <span class="memo-mark">✓</span></div><div class="memo-line">$T(x) = 0.1x$ if $70000 < x \\leq 150000$ <span class="memo-mark">✓</span></div><div class="memo-line">$T(x) = 15000 + 0.2(x-150000)$ if $x > 150000$ <span class="memo-mark">✓</span></div><div class="memo-line">$T(250000) = 15000 + 0.2(100000) = 15000 + 20000 = R35000$ <span class="memo-mark">✓✓</span></div>'
},

// ——— Q8: SARS tax bracket ———
{id:1406,topic:'Week 5: Application of Functions',
question:'Using the SARS tax table (tax relief on investments: first R23 800 is exempt; primary rebate: R13 500):<br>$T(x)$ is piecewise from the table:<br>0-188 000: 18% of taxable income<br>188 001-293 600: R33 840 + 26% of amount above 188 000<br>293 601-406 400: R61 296 + 31% of amount above 293 600<br>(8.1) How much tax does a student of 20 years, who earns R70 000, pay? [2]<br>(8.2) How much tax does a person younger than 60 pay who earns R110 000 and has no investments? [3]<br>(8.3) How much tax does a person pay who earns R410 000 per annum plus interest of R51 000? [5]',
markingCriteria:[
  {type:'value',expected:0,tolerance:10,description:'(8.1) R70000 → Tax below rebate = R0',marks:2},
  {type:'value',expected:6300,tolerance:100,description:'(8.2) R110000 → T = R6300',marks:3},
  {type:'value',expected:56476,tolerance:100,description:'(8.3) Complex tax calc',marks:5}
],
easyTemplate:'<div class="memo-line"><strong>(8.1) Student, 20 years, R70 000:</strong></div><div class="memo-line">Tax before rebate: $0.18 \\times @INPUT@ = R@INPUT@$</div><div class="memo-line">Less primary rebate: $@INPUT@ - @INPUT@ = R@INPUT@$</div><div class="memo-line">Tax payable: R@INPUT@ (cannot be negative)</div><div class="memo-line"><strong>(8.2) Person < 60, R110 000, no investments:</strong></div><div class="memo-line">Tax before rebate: $0.18 \\times @INPUT@ = R@INPUT@$</div><div class="memo-line">Less rebate: $@INPUT@ - @INPUT@ = R@INPUT@$</div><div class="memo-line"><strong>(8.3) R410 000 + R51 000 interest:</strong></div><div class="memo-line">Total income = R@INPUT@. Interest exemption = R@INPUT@</div><div class="memo-line">Taxable income = R@INPUT@</div><div class="memo-line">Tax bracket: R61 296 + 0.31 × ($@INPUT@ - @INPUT@) = R@INPUT@</div><div class="memo-line">Less rebate: R@INPUT@. Tax payable: R@INPUT@</div>',
hardTemplate:'(8.1) Tax = R@INPUT@<br>(8.2) Tax = R@INPUT@<br>(8.3) Tax = R@INPUT@',
memo:'<div class="memo-line">(8.1) $0.18(70000) = R12600$, less R13500 rebate → R0 <span class="memo-mark">✓✓</span></div><div class="memo-line">(8.2) $0.18(110000) = R19800$, less R13500 = R6300 <span class="memo-mark">✓✓✓</span></div><div class="memo-line">(8.3) Total = 461000, exempt 23800 → taxable 437200. T = 61296+0.31(437200-293600) = 61296+0.31(143600) = 61296+44516 = R105812 − R13500 = R92312 <span class="memo-mark">✓✓✓✓✓</span></div>'
},

// ——— Q9.1: Complex tax calculation ———
{id:1407,topic:'Week 5: Application of Functions',
question:'A person earns a fixed salary of R370 000 per year and works an extra 200 hours at R250 per hour. The person has an investment which earns annual interest of R12 650 and contributes R950 each month towards an annuity. Using the tax table (exemptions: R23 800 interest, R350 000 annuity max; primary rebate: R13 050):<br>(9.1.1) Determine the person\'s taxable income for the tax year. [5]<br>(9.1.2) Write the income tax $T$ as a function of taxable income $x$. [2]<br>(9.1.3) Determine the tax due by the person. [3]<br>(9.1.4) Determine the actual percentage of the person\'s income that will go to SARS. [2]',
markingCriteria:[
  {type:'value',expected:397450,tolerance:100,description:'Taxable income = R397 450',marks:5},
  {type:'contains',expected:['61296','31%','0.31'],description:'T = 61296 + 0.31(x - 293600)',marks:2},
  {type:'value',expected:19044,tolerance:100,description:'Tax due ≈ R19 044',marks:3},
  {type:'value',expected:4.47,tolerance:0.5,description:'Effective tax rate ≈ 4.47%',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>(9.1.1) Taxable income:</strong></div><div class="memo-line">Fixed salary: R@INPUT@</div><div class="memo-line">Overtime: @INPUT@ × R@INPUT@ = R@INPUT@</div><div class="memo-line">Interest: R@INPUT@ − R@INPUT@ (exemption) = R@INPUT@</div><div class="memo-line">Annuity deduction: @INPUT@ × R@INPUT@ = R@INPUT@</div><div class="memo-line">Taxable income = @INPUT@ + @INPUT@ + @INPUT@ − @INPUT@ = R@INPUT@</div><div class="memo-line"><strong>(9.1.2)</strong> $T(x) = @INPUT@ + @INPUT@(x - @INPUT@)$</div><div class="memo-line"><strong>(9.1.3)</strong> $T = @INPUT@ + 0.31(@INPUT@ - @INPUT@) = @INPUT@$</div><div class="memo-line">Less rebate: $@INPUT@ - @INPUT@ = R@INPUT@$</div><div class="memo-line"><strong>(9.1.4)</strong> Effective rate: $\\frac{@INPUT@}{@INPUT@} \\times 100 = @INPUT@\\%$</div>',
hardTemplate:'Taxable income = R@INPUT@<br>T(x) = @INPUT@<br>Tax due = R@INPUT@<br>Effective rate = @INPUT@%',
memo:'<div class="memo-line">Salary=370000, Overtime=200×250=50000, Interest=12650-23800→0 (below exemption) <span class="memo-mark">✓✓</span></div><div class="memo-line">Annuity=950×12=11400. Taxable=370000+50000-11400=R408600 <span class="memo-mark">✓✓✓</span></div><div class="memo-line">T=61296+0.31(408600-293600)=61296+0.31(115000)=61296+35650=R96946 <span class="memo-mark">✓</span></div><div class="memo-line">Tax due=96946-13050=R83896 <span class="memo-mark">✓✓</span></div><div class="memo-line">Effective rate=83896/432650×100≈19.4% <span class="memo-mark">✓✓</span></div>'
}

];if(!window.QUESTIONS)window.QUESTIONS=[];window.QUESTIONS.push(...Q);})();
