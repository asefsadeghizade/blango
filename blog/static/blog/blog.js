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
  state = {
    dataLoaded: true,
    data: {
      results: [
        {
          id: 15,
          tags: [
            'django', 'react'
          ],
          'hero_image': {
            'thumbnail': '/media/__sized__/hero_images/the-weeknd-mixtapes-ds4tgr5zqbeyds1c-thumbnail-100x100-70.jpg',
            'full_size': '/media/hero_images/the-weeknd-mixtapes-ds4tgr5zqbeyds1c.jpg'
          },
          title: 'Test Post',
          slug: 'test-post',
          summary: 'A test post, created for Django/React.'
        }
      ]
    }
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
ReactDOM.render(
  React.createElement(PostTable),
  domContainer
)