import { screen, render, userEvent } from './index'
import NavBar from '../components/NavBar'

describe('Navbar', () => {
    
    it('should render navbar', () => {
        render(<NavBar></NavBar>)
        expect(screen.queryByText('PCE | PLATAFORMA DE CRESCIMENTO ESPIRITUAL')).toBeInTheDocument()
    })

})