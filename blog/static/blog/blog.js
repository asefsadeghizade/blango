class PostRow extends React.Component {
  render () {
    const post = this.props.post

    let thumbnail

    if (post.hero_image.thumbnail) {
      thumbnail = <img src={post.hero_image.thumbnail}/>
    } else {
      thumbnail = '-'
    }

    return <tr>
      <td style={{ color: 'white' }}>{post.title}</td>
      <td style={{ color: 'white' }}>{thumbnail}</td>
      <td style={{ color: 'white' }}>{post.tags.join(', ')}</td>
      <td style={{ color: 'white' }}>{post.slug}</td>
      <td style={{ color: 'white' }}>{post.summary}</td>
      <td><a href={'/post/' + post.slug + '/'} style={{ color: 'lightblue' }}>View</a></td>
    </tr>
  }
}

class PostTable extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false, // Default state
      data: { results: [] } // Ensure data structure is always defined
    };
  }

//this.props.url
    componentDidMount () {
      fetch(this.props.url).then(response => {
        if (response.status !== 200) {
          throw new Error('Invalid status from server: ' + response.statusText)
        }

        return response.json()
      }).then(data => {
        this.setState({
          dataLoaded: true,
          data: data
        })
      }).catch(e => {
        console.error(e)
        this.setState({
          dataLoaded: true,
          data: {
            results: []
          }
        })
      })
  }

  render () {
    let rows
    if (this.state.dataLoaded) {
      if (this.state.data.results.length) {
        rows = this.state.data.results.map(post => <PostRow post={post} key={post.id}/>)
      } else {
        rows = <tr>
          <td colSpan="6">No results found.</td>
        </tr>
      }
    } else {
      rows = <tr>
        <td colSpan="6">Loading&hellip;</td>
      </tr>
    }

    return <table 
      className="table table-striped table-bordered mt-2"
      style={{ color: 'white' }}
      >
      <thead>
      <tr>
        <th>Title</th>
        <th>Image</th>
        <th>Tags</th>
        <th>Slug</th>
        <th>Summary</th>
        <th>Link</th>
      </tr>
      </thead>
      <tbody>
      {rows}
      </tbody>
    </table>
  }
}

const domContainer = document.getElementById('react_root')
/*ReactDOM.render(
  React.createElement(PostTable),
  domContainer
) */

ReactDOM.render(
  React.createElement(
    PostTable,
    {url: postListUrl}
  ),
  domContainer
)
