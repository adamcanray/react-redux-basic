const initState = {
  users: [],

  posts: [
    {id: '1', title: 'qui est esse', body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'},
    {id: '2', title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'},
    {id: '3', title: 'dolorem eum magni eos aperiam quia', body: 'ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae'}
  ]
}
const rootReducer = (state = initState, action) => {
  // console.log(action);
  if(action.type === 'DELETE_POST'){
    let newPost = state.posts.filter(post => {
      return action.id !== post.id
    });
    return {
      ...state,
      posts: newPost
    }
  }
  return state;
}

export default rootReducer