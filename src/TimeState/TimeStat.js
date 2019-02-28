import React ,{Component} from 'react';
import Time from '../Time/Time' ;

 class TimeStat extends Component {

      constructor (props){

        super(props);
        this.state={
             timestate:0,
            
        }



      }

      
      start=()=>{

          if(this.state.interval ){
            return
          }
  
          const interval = setInterval(
            ()=> {
  
                this.setState(
                    {timestate:this.state.timestate+1000}
                )
            },
  
            1000
        )
  
        this.setState({
          interval  : interval
          })
  
          this.setState({
            fnvalue: !this.state.fnvalue
          })
        }
        

       

      pause=()=>{

          if(!this.state.interval){
            return
          }

          clearInterval(this.state.interval)
          this.setState({
            interval : undefined
          })

          this.setState({
           fnvalue: !this.state.fnvalue
         })
         }
        

      reset=()=>{


        clearInterval(this.state.interval)
        this.setState({
          interval : 0,
          timestate:0
        })
   }

   startpause=()=>{

           if(this.state.interval){

            this.pause();
           }
           else{
            this.start();
           }
          
   }


      render(){
        
        return <div>
        <Time timer={this.state.timestate}/>
        <div className='button'>
        <button type="button" class="btn btn-success"  onClick={this.startpause} >{this.state.interval?'pause':'start'}</button>
        <button type="button" class="btn btn-danger" onClick={this.reset}>Reset</button>
        </div>
       
        </div>
        

      }

 }

 export default TimeStat;