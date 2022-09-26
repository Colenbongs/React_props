import Books from "./components/product";

function App() {
  return (
    <div className="App">
      <h1>Books that I have read</h1>
      <Books
        name_of_author="Robert Kiyosaki"
        title_of_book="Rich Dad Poor Dad"
        publisher="Warner Books"
        publication_date="01-April-2000"
        summary="The book describes how Robert learned financial
     literacy by working for his friends dad 'rich dad'and aslo 
     describes how his father enjoyed being an employe of the 
     goverment with a safe retirement fund"
      />
      <Books
        name_of_author="Robert Kiyosaki"
        title_of_book="The four quadrand"
        publisher="Robert T Kiyosaki"
        publication_date="06-June-2011"
        summary="Robert describes four ways which everyone makes money
     first quadrant(Emplooye), second quadrant(Self employeed), 
     third quadrant(Investor), fourth quadrant(Business-corporate)"
      />

      <Books
        name_of_author="Jordan Peterson"
        title_of_book="12 Rules for Life: An Antidote to Chaos"
        publisher="Random House Canada Penguin Allen Lane"
        publication_date="16-January-2018"
        summary="12 Rules For Life is a stern, story-based, and 
     entertaining self-help manual for young people that lays 
     out a set of simple principles that can help us become more 
     disciplined, behave better, act with integrity, and 
     balance our  lives while enjoying them as much as we can."
      />
    </div>
  );
}
export default App;
