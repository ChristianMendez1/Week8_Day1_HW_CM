function Sidebar() {
    const navs = [
        { name: "Dashboard"},
        { name: "Widget"},
        { name: "Reviews"},
        { name: "Customers"},
        { name: "Online Analysis"},
        { name: "Settings"},
      ]
      // map over the dogs array and create an array of JSX for each dog
      const navJSX = navs.map(nav => {
        // we return JSX for each dog in the array which we store in the dog variable, essentially we are looping over dog of dogs
        return (
          <div>
            <ul>
                <li><a href= ' '>{nav.name}</a></li>
            </ul>
          </div>
        )
      })
    
      // the component returns JSX that uses the dogJSX array
      return <div id='sidebar'>{navJSX}</div>
    }


export default Sidebar;