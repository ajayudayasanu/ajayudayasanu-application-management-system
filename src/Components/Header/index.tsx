import { useState} from 'react'
import { Menu, Segment,Icon } from 'semantic-ui-react'
import { NavLink,useNavigate } from "react-router-dom";
export  function Header() {
  // const navigate = useNavigate()
  const [activeItem,setActiveItem]=useState<string>("home")

    const handleItemClick= (tab: string) =>{
        setActiveItem(tab)
       // navigate(`/${tab}`)
    }

    return (
      <Segment inverted attached size='mini'>
        <Menu inverted secondary>
          <Menu.Item
            name='logo'
            active={activeItem === 'logo'}
            onClick={()=>handleItemClick('home')}
          >
           <Icon name='users' />
          </Menu.Item>

          <Menu.Item
            active={activeItem === 'Applications'}
            onClick={()=>handleItemClick('Applications')}
          >
            {/* <NavLink
            to={'/applications'}> */}
            Application management system
            {/* </NavLink> */}
            </Menu.Item>
         
        </Menu>
      </Segment>
    )
  }