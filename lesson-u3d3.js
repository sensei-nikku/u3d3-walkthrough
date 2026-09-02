/* =====================================================================
   Unit 3 · Day 3 — Three Portfolios, Same Money
   SCAFFOLDED BUILD. Sixteen small steps instead of six big ones.

   The earlier version handed students a finished formula to retype. This
   one builds every formula out of parts they have already made:

     a percent becomes a multiplier -> one year at a time
     -> three years chained in one line -> absolute refs, at the moment
     copying starts -> SUM then divide -> AVERAGE as the shorthand
     -> MIN and MAX separately -> then folded into one expression

   Nothing is introduced before there is a reason to want it.
   ===================================================================== */

export const lesson = {
  id: 'u3d3',
  unit: 'Unit 3 · Day 3',
  title: 'Three Portfolios, Same Money',
  blurb: 'Ten thousand dollars, three years, three ways to hold it. We build this one slowly \u2014 first what a percent does to a single year, then all three years at once, then four ways of measuring the result. One of these portfolios wins on average and loses on money.',
  rows: 44,
  cols: 4,

  given: {
    A1: 'DIVERSIFICATION — THREE PORTFOLIOS, SAME MONEY',

    A3: 'STARTING AMOUNT',
    A4: 'Invested in each, at the start', B4: 10000,

    A6: 'YEARLY RETURNS', B6: 'One stock', C6: '60/40 mix', D6: 'Index fund',
    A7: 'Year 1', B7: 0.65, C7: 0.18, D7: 0.26,
    A8: 'Year 2', B8: -0.45, C8: -0.08, D8: -0.12,
    A9: 'Year 3', B9: 0.30, C9: 0.14, D9: 0.22,

    A11: 'WARM-UP — one year at a time (one stock)',
    A12: 'Year 1 multiplier',
    A13: 'Money after year 1',
    A14: 'Money after year 2',
    A15: 'Money after year 3',

    A17: 'NOW ALL THREE YEARS IN ONE FORMULA',
    A18: 'Ending value',

    A20: 'AVERAGE — the long way, then the short way',
    A21: 'Sum of the three years',
    A22: 'Average, by dividing',
    A23: 'Average, using AVERAGE()',

    A25: 'WORST YEAR, BEST YEAR, AND THE SWING',
    A26: 'Worst year',
    A27: 'Best year',
    A28: 'Swing: best minus worst',

    A30: 'THE VERDICT',
    A31: 'Highest average return?',
    A32: 'Most money at the end?',

    A34: 'FINISH EARLY — make year 2 worse',
    A35: 'New year 2 for the one stock',
    A36: 'New ending value',
    A37: 'Does it still beat the index fund?',
  },

  steps: [

    /* ---- warm-up: what a percent actually does to money ---------- */
    {
      title: 'Turn a percent into a multiplier',
      body: 'Before any big formula, one small idea. A return of +65% means your money becomes 165% of what it was \u2014 you multiply by 1.65. So the multiplier is always 1 plus the return. Cell B7 already holds 0.65. In B12, type =1+B7',
      hint: 'Type the equals sign first, then 1, then +, then B7. Press Enter.',
      targets: [{ cell: 'B12', value: 1.65, mustBeFormula: true }],
      note: '1.65. You did not type 1.65 \u2014 you built it from the return. That matters, because later you will change a return and want everything downstream to follow on its own.',
    },
    {
      title: 'One year of growth',
      body: 'Now use it. The starting amount is in B4 and your multiplier is in B12. In B13, type =B4*B12',
      hint: 'A star * means multiply. The whole formula is =B4*B12',
      targets: [{ cell: 'B13', value: 16500, mustBeFormula: true }],
      note: '$16,500 after one year. A great year.',
    },
    {
      title: 'Year two, on the new balance',
      body: 'Year 2 is \u201345%, so the multiplier is 1 + (\u20130.45) = 0.55 \u2014 and you do not have to work that out, because B8 already holds \u20130.45. Year 2 grows the balance you ended year 1 with, not the original $10,000. In B14, type =B13*(1+B8)',
      hint: 'The parentheses around (1+B8) matter. They tell the sheet to add first, then multiply.',
      targets: [{ cell: 'B14', value: 9075, mustBeFormula: true }],
      note: '$9,075 \u2014 below where you started, after a year that gained 65% and a year that lost 45%. Percentages do not cancel out, because the loss is taken from a bigger number than the gain was.',
    },
    {
      title: 'Year three, rounded to cents',
      body: 'Same pattern once more, with one addition. Wrap it in ROUND so the answer comes out as money instead of a long decimal. ROUND takes two things: what to round, and how many decimal places. In B15, type =ROUND(B14*(1+B9),2)',
      hint: 'The 2 at the end means two decimal places, so cents. Count your parentheses \u2014 one opens after ROUND, one opens before 1+B9.',
      targets: [{ cell: 'B15', value: 11797.5, mustBeFormula: true }],
      note: '$11,797.50 after three years. Hold on to that number.',
    },

    /* ---- compress it, and meet absolute refs when they pay off --- */
    {
      title: 'All three years in one line',
      body: 'Four cells did that. One cell can. Instead of stepping through a running balance, chain all three multipliers together. In B18, type =ROUND($B$4*(1+B7)*(1+B8)*(1+B9),2)',
      hint: 'The dollar signs in $B$4 lock that cell in place. Nothing else changes yet \u2014 the next step is where it pays off.',
      targets: [{ cell: 'B18', value: 11797.5, mustBeFormula: true }],
      note: 'Identical to B15. Same math, one line. Stepping through was for understanding; chaining is for working.',
    },
    {
      title: 'Why the dollar signs earn their keep',
      body: 'Now the other two portfolios. The formula is the same shape \u2014 only the column letter moves. In C18 type =ROUND($B$4*(1+C7)*(1+C8)*(1+C9),2) and in D18 the same thing with D.',
      hint: 'Every B7, B8, B9 becomes C7, C8, C9 \u2014 but $B$4 stays exactly as written, because all three portfolios start from the same $10,000.',
      targets: [
        { cell: 'C18', value: 12375.84, mustBeFormula: true },
        { cell: 'D18', value: 13527.36, mustBeFormula: true },
      ],
      note: 'That is what locking a cell is for: one number every formula needs, written once. Now look across row 18 \u2014 the single stock came last.',
    },

    /* ---- average: long way first, shorthand second --------------- */
    {
      title: 'Add up the three returns',
      body: 'Next measure: the average yearly return. Do it the long way first, so the shortcut means something. SUM adds a range, and B7:B9 means everything from B7 down to B9. In B21, type =SUM(B7:B9)',
      hint: 'The colon makes a range. Typing =B7+B8+B9 gives the same answer.',
      targets: [{ cell: 'B21', value: 0.5, mustBeFormula: true }],
      note: '0.5 \u2014 fifty percentage points spread across three years.',
    },
    {
      title: 'Divide to get the average',
      body: 'An average is a sum divided by how many things you added. Three years, so divide by 3. In B22, type =ROUND(B21/3,4)',
      hint: 'A slash / means divide. Four decimal places this time, because these are rates rather than dollars.',
      targets: [{ cell: 'B22', value: 0.1667, mustBeFormula: true }],
      note: '0.1667, which reads as 16.67% a year on average.',
    },
    {
      title: 'The shorthand',
      body: 'Two cells to get one average is a lot of work. AVERAGE does the summing and the dividing in a single move. In B23, type =ROUND(AVERAGE(B7:B9),4)',
      hint: 'Same range as SUM. The answer should match B22 exactly.',
      targets: [{ cell: 'B23', value: 0.1667, mustBeFormula: true }],
      note: 'Same answer. Now you know what AVERAGE is doing underneath, which is the only way to notice when it is the wrong tool for a job.',
    },
    {
      title: 'Average the other two',
      body: 'In C23 and D23, do the same for the 60/40 mix and the index fund.',
      hint: '=ROUND(AVERAGE(C7:C9),4) and then the same with D.',
      targets: [
        { cell: 'C23', value: 0.08, mustBeFormula: true },
        { cell: 'D23', value: 0.12, mustBeFormula: true },
      ],
      note: 'Stop and read row 23 against row 18. The single stock has the HIGHEST average yearly return \u2014 16.67% against 12% and 8% \u2014 and in row 18 it has the LEAST money. Both numbers are true. Only one of them is your money.',
    },

    /* ---- worst, best, swing -------------------------------------- */
    {
      title: 'The worst year',
      body: 'An average hides the years that hurt, so go find them. MIN returns the smallest value in a range. In B26, type =MIN(B7:B9)',
      hint: 'Same range shape as SUM and AVERAGE. The answer is negative.',
      targets: [{ cell: 'B26', value: -0.45, mustBeFormula: true }],
      note: 'There it is. A 45% fall, and the +30% that followed could not undo it, because the +30% was taken from a much smaller pile.',
    },
    {
      title: 'The best year',
      body: 'MAX is MIN\u2019s twin. In B27, type =MAX(B7:B9)',
      hint: 'Identical to the last step, with MAX in place of MIN.',
      targets: [{ cell: 'B27', value: 0.65, mustBeFormula: true }],
    },
    {
      title: 'The swing, built from your own two cells',
      body: 'How far apart were the best and worst years? That distance is what volatility feels like from the inside. Use the two cells you just made. In B28, type =ROUND(B27-B26,4)',
      hint: 'B26 is negative, so subtracting it makes the answer bigger. 0.65 minus \u20130.45 is 1.10, not 0.20. That is arithmetic, not a bug.',
      targets: [{ cell: 'B28', value: 1.1, mustBeFormula: true }],
      note: '1.10 \u2014 a hundred and ten percentage points between this portfolio\u2019s best year and its worst.',
    },
    {
      title: 'Swing for the other two, folded into one formula',
      body: 'You do not need separate MIN and MAX cells every time \u2014 they can go straight inside one expression. In C28 type =ROUND(MAX(C7:C9)-MIN(C7:C9),4) and do the same in D28.',
      hint: 'Same idea as B28, with MAX and MIN written inline instead of pointing at the cells above.',
      targets: [
        { cell: 'C28', value: 0.26, mustBeFormula: true },
        { cell: 'D28', value: 0.38, mustBeFormula: true },
      ],
      note: '110 against 26 and 38. Same three years for all three portfolios. The only difference is how the money was spread out.',
    },

    /* ---- verdict ------------------------------------------------- */
    {
      title: 'Read your own table back',
      body: 'Answer from the cells you built, not from memory. In B31, type the name of the portfolio with the highest average yearly return. In B32, the one that ended with the most money. Spell them exactly as they appear in row 6.',
      hint: 'Row 23 holds the averages, row 18 holds the ending values. They do not point at the same column.',
      targets: [
        { cell: 'B31', value: 'One stock', text: true },
        { cell: 'B32', value: 'Index fund', text: true },
      ],
      note: 'Two different portfolios. That gap is the whole lesson: an average return tells you nothing about what you end up holding, and one terrible year in a concentrated bet does damage the good years cannot repair.',
    },

    /* ---- finish early -------------------------------------------- */
    {
      title: 'Finish early \u2014 make year 2 worse',
      body: 'One company can have a far worse year than a basket of five hundred. In B35, type -0.6 for a 60% drop. Then in B36 build the ending value using that new cell: =ROUND($B$4*(1+B7)*(1+B35)*(1+B9),2). Finally in B37, type Yes or No \u2014 does the one stock still beat the index fund?',
      hint: 'B36 is your B18 formula with B35 in place of B8. Compare the result against D18.',
      targets: [
        { cell: 'B35', value: -0.6 },
        { cell: 'B36', value: 8580, mustBeFormula: true },
        { cell: 'B37', value: 'No', text: true },
      ],
      note: '$8,580 \u2014 less than the $10,000 that went in, after a year that gained 65% and a year that gained 30%. An index fund holding five hundred companies cannot fall 60% because one of them had a catastrophe. That is not a strategy. It is arithmetic.',
    },
  ],

  closing: {
    title: 'What you built',
    body: 'You started by turning one percent into one multiplier and finished with four different measures of three portfolios. No formula was handed to you whole \u2014 every one was assembled from a piece you had already made. Now change B7 to 0.10 and watch which cells care. Or set B4 to 1000 and see which of the four measures move and which do not budge. The model does not care how much money you start with. It cares how the money is spread.',
  },
};
