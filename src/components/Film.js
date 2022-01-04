const Film = ({name, url, children}) => {
    return (
      
            <li><a href={url}>{children}</a></li>
     
    )
}

export default Film;