import React, { Component } from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { withRouter } from 'next/router';
import Image from 'next/image'
import MenuItemComponent from './MenuItemComponent';
class NavBarComponent extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            nav: false,
            sticky: null,   
            bg: 'bg-theme',
            activeId: '',
            current: 'mail',
            data:[]
            
        }

    }
    handleClick = e => {
        //console.log('click ', e);
        this.setState({ current: e.key });
    }
    /*getMenuItem= async()=>{
        const res = await fetch(`${process.env.API_PATH}tasks`)
        const data = await res.json()
        this.setState({
            data:data
        })

    }*/
    listener = null;
    handleScroll = () => {
        var scroll = window.pageYOffset
        
        if (scroll < 100) {
            //console.log('scorll=', true)
            this.setState({ sticky: null, bg: 'bg-theme', nav: false })
        } else {
            //console.log('scorll=', false)
            this.setState({ sticky: 'top', bg: 'bg-theme', nav: false })
        }

    }
    
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);

    }
    goToHome(){
        const{router}=this.props
        router.push('/')
    }
    render() {
        const { nav, sticky,bg,data } = this.state
        //console.log("server",data)
        return (
            <Navbar className={bg} hidden={nav} collapseOnSelect sticky={sticky} expand="lg">
                <Container>
                    <Navbar.Brand onClick={()=>this.goToHome() } ></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <MenuItemComponent/>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
            
        )
    }
}




export default withRouter (NavBarComponent)