describe('Upvotes vs Downvotes', () => {
   function getVoteCount(obj) {
      return obj.upvotes - obj.downvotes
   }

   test('Test 1. Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.', () => {
      expect(getVoteCount({upvotes: 13, downvotes: 0})).toEqual(13)
   })

   test('Test 2.', () => {
      expect(getVoteCount({upvotes: 2, downvotes: 33})).toEqual(-31)
   })
   test('Test 3.', () => {
      expect(getVoteCount({upvotes: 132, downvotes: 132})).toEqual(0)
   })
})


describe("The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.", () => {
   function procentnumb(numb) {
      return {"Needs": numb * 50 / 100, "Wants": numb * 30 / 100, "Savings": numb * 20 / 100}
   }
   test('Test 1. ', ()  =>{
      expect(procentnumb(10000)).toEqual({ Needs: 5000, Wants: 3000, Savings: 2000 })
   })

   test('Test 2.', () => {
      expect(procentnumb(50000)).toEqual({ Needs: 25000, Wants: 15000, Savings: 10000 })
   })
   test('Test 3', () => {
      expect(procentnumb(13450)).toEqual({ Needs: 6725, Wants: 4035, Savings: 2690 })
   })
})