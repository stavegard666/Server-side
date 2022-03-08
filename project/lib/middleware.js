const getNewsData = () => [
    {
      heading: 'News',
      body: "  ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat sapien eget enim euismod, vel facilisis arcu porttitor. Vivamus vehicula, risus ut tempor finibus, felis turpis venenatis metus, elementum accumsan nisl arcu varius arcu. Sed non enim vulputate, pellentesque diam ac, vehicula ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris at sodales erat. Mauris orci mauris, gravida efficitur sodales malesuada, convallis sit amet lectus. Donec dictum egestas lectus, id pretium enim tristique a. Morbi ac orci mattis, consectetur orci ut, aliquet odio. Sed auctor ut est eget vehicula. Suspendisse ultricies nisi justo, in rutrum ligula tincidunt quis. Etiam auctor sit amet leo in tincidunt. Fusce tristique lorem ligula, vitae lacinia ex viverra ut. Nam vel nibh vitae velit fringilla fermentum.",
      Auther: 'Paul Roost'
    },
    {
        heading: 'What we do about COVID-19',
        body: "Test ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        Auther: 'Paul Roost',

    }  
  ]
  
  const newsMiddleware = (req, res, next) => {
    if(!res.locals.partials) res.locals.partials = {}
    res.locals.partials.newsContext = getNewsData()
    next()
  }

module.exports = { newsMiddleware: newsMiddleware }