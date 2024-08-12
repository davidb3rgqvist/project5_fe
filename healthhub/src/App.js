import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/register" element={<Register />} />
            </Routes>
        </Router>
    );
}

function HeroSection() {
    return (
        <div className="hero-section text-center text-white">
            <Container>
                <h1>Welcome to DataWarehouse</h1>
                <p>Your data management partner</p>
                <Button variant="primary" size="lg">Get Started</Button>
            </Container>
        </div>
    );
}

function FeaturesSection() {
    return (
        <div className="features-section py-5 text-center">
            <Container>
                <h2>Our Features</h2>
                <p>Explore the features that make us the best choice for your data needs.</p>
                {/* Add feature cards here */}
            </Container>
        </div>
    );
}

function Footer() {
    return (
        <footer className="py-4 bg-dark text-white text-center">
            <Container>
                <p>&copy; 2024 DataWarehouse. All rights reserved.</p>
            </Container>
        </footer>
    );
}

export default App;
