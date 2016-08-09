# Redux Blog
This repository uses React-Redux to build the client side of a blog with functionality for viewing posts, creating new posts, and deleting posts.  The blog allows for markdown rendering.  The posts are stored on an api server running at http://cs52-blog.herokuapp.com/api.  This app uses Axios to make promise-based requests to the server.  What worked well was making functions that did one specific thing; for example, in the show component, making functions for each separate field allowed me to specialize the fields that I edited.  Another thing that worked well was mapping state to props, because it was an efficient way for all of the components to have access to the master map.  One thing that did not work very well was accessing the parameters.  It was difficult to figure which ones were state, params, or props.  Furthermore, I had numerous problems with saving.  It took a while for me to find an efficient way to save all of the documents at the same time, which caused a lot of problems.  In addition, another problem I had was accounting for when the state was null; we eventually solved this with componentWillMount, but handling null states was often a problem.

EC: added some pretty graphics
