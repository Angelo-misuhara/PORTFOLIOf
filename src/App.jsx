import './App.css';
import About from './layouts/About';
import LandingPage from './layouts/LandingPage';


function App() {
	return (
		<>
			<div  className="px-[1.8rem] md:px-[5rem]">
				<LandingPage />
				<About/>
			</div>
		</>
	);
}

export default App;
