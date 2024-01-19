import './App.css';
import About from './layouts/About';
import LandingPage from './layouts/LandingPage';
import Skills from './layouts/Skills';


function App() {
	return (
		<>
			<div  className="px-[1.8rem] md:px-[5rem]">
				<LandingPage />
				<About />
				<Skills/>
			</div>
		</>
	);
}

export default App;
