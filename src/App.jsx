import './App.css';
import Sidebar from './components/Sidebar';
import About from './layouts/About';
import LandingPage from './layouts/LandingPage';
import Skills from './layouts/Skills';


function App() {
	return (
		<>
			<div className="px-[1.8rem] md:px-[5rem]">
				<Sidebar/>
				<LandingPage />
				<About />
				<Skills/>
			</div>
		</>
	);
}

export default App;
