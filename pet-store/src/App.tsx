import logo from './logo.svg';
import './App.css';
import {
  Pets, NavBarHeader, MarketingFooter, PerCreateForm, ReviewCard, PerUpdateForm
} from './ui-components';
import {useState} from 'react';
import {withAuthenticator, WithAuthenticatorProps} from '@aws-amplify/ui-react';

function App({user, signOut}: WithAuthenticatorProps) {
  console.log(user?.attributes?.profile)
  const [showForm, setShowForm] = useState(false);
  const [pets, setPets] = useState(null);
  const [showPetsDetails, setShowPetsDetails] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [updatePet, setUpdatePet] = useState(null);
  const navigationOverride = {
    "Add Pet" : {
      style: {
        color: "red",
        cursor: "pointer",
    },
      onClick: () => {
        setShowForm(!showForm);
      }
  },
      Button3857416: {
      onClick: signOut,
    },
    image: {
      src: user?.attributes?.profile,
    }
    
  };
  return (
    <div className="App">
      <NavBarHeader overrides={navigationOverride} width={"100%"} style={{
        textShadow: "0px 0px 5px white",
      }} backgroundColor = "#282C34" />
      <header className="App-header">

        {openUpdate && <PerUpdateForm per = {updatePet} backgroundColor="white" margin="40px" />}  
        {showForm && <PerCreateForm backgroundColor="white" margin="40px" />}
        {showPetsDetails &&  <ReviewCard pet = {pets} overrides ={{MyIcon: {onClick: () => {setShowPetsDetails(false)}}}}/>}
        <Pets overrideItems ={({item, index}) => ({
          overrides: {
            Breed: {color: "blue"},
            Button3848427 : {onClick: () => {setPets(item); setShowPetsDetails(true)}},
            Button38501379 : {onClick: () => {setOpenUpdate(!openUpdate);setUpdatePet(item)}},
          }
        })} />
        
      </header>
      <MarketingFooter width={"100%"}/>
    </div>
  );
}

export default withAuthenticator(App);
