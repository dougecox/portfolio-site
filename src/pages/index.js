import React from 'react'
import Link from 'gatsby-link'



const projects = [
  { title: 'Promised',
    link: 'https://github.com/dougecox',
    image: 'null'
  }, 
  { title: 'knex',
  link: 'https://github.com/dougecox',
  image: 'null'
  },
  { title: 'api',
    link: 'https://github.com/dougecox',
    image: 'null'
  }, 
  { title: 'graph',
  link: 'https://github.com/dougecox',
  image: 'null'
  },
  { title: 'jsfiddle',
    link: 'https://github.com/dougecox',
    image: 'null'
  }, 
  { title: 'clock',
  link: 'https://github.com/dougecox',
  image: 'null'
  }
];

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      link: this.props.link,
      image: this.props.image
    }
  }
  
  render() {
    return (
      <div className={this.state.title} style={{
        border: "1px solid black",
        margin: '5%',
        borderRadius: '18px',
        'max-width': '70%',
        'height': '100px',
        padding: '10%'}}
        data="title">
        {this.state.title} 
        
      <button className="square" onClick={() => alert(this.props.title)}>
        {this.props.value}
      </button>
      </div>
    );
  }
}


module.export = ProjectCard;


const IndexPage = () => (
  <div>
    <h1>Welcome to my page</h1>
    <p>I'm a Full-Stack Web Developer, who loves simplifying complex problems, tackling tough challenges, and
smiles.  </p>
    <p>This is my portfolio site</p>
    <div className="Projects" style={{
      display: 'flex',
      height: '100px',
      'grid-auto-columns': '10px',
      'grid-auto-columns': '33.3%',
      padding: '10%'
    }}> 
    Projects:
    {projects.map((project, idx) => (
      <ProjectCard key={project.title} title={project.title} img={project.image} link={project.link} style={{
        margin: '30%',
        padding: '20%'}}/>
      ))}

    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)



export default IndexPage
