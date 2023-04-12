function Sidebar() {
    const navs = [
        { name: "Dashboard"},
        { name: "Widget"},
        { name: "Reviews"},
        { name: "Customers"},
        { name: "Online Analysis"},
        { name: "Settings"},
      ]
      const navJSX = navs.map(nav => {
        return (
          <div>
            <ul>
                <li><a href= ' '>{nav.name}</a></li>
            </ul>
          </div>
        )
      })
      return <div id='sidebar'>{navJSX}</div>
    }


export default Sidebar;