import React from 'react';
import Toolbar from '../UI/Toolbar/Toolbar'
import Sidedrawer from '../UI/SideDrawer/SideDrawer'
import Backdrop from '../UI/Backdrop/Backdrop'

class Layout extends React.Component {
    state={
        issideDrawerOpen:false
      }
    onDrawerHandler=()=>{
        this.setState((prevState)=>{
          return {issideDrawerOpen:!prevState.issideDrawerOpen}
          });
        }
        
        backdropclickHandler=()=>{
          this.setState({issideDrawerOpen:false})
        }
        onToggleHandler=()=>{
            console.log('toggle clicked')
            return this.setState({issideDrawerOpen:true})
        }
          render()
          { 
            let sidedrawer;
            let backdrop;
            if(this.state.issideDrawerOpen){
              sidedrawer=<Sidedrawer />;
              backdrop=<Backdrop clicked={this.backdropclickHandler}/>
            }             
    return (
        <header>
           <Toolbar clicked={this.onToggleHandler}/>
           {sidedrawer}
          {backdrop}
          <main>
              {this.props.children}
              </main> 
              </header> 
    )
    }
}

export default Layout;
