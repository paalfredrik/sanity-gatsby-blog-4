export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              sites: [
                {
                  buildHookId: '5ccc2a5686eba3f6a9fcac40',
                  name: 'Content Studio',
                  siteId: '99a96925-ea71-4259-9f2a-07a8eb0e67d3'
                },
                {
                  buildHookId: '5ccc2a5631dcd4dddc48f04d',
                  name: 'Blog Website',
                  siteId: 'd2b71bfd-2779-4c1d-b64a-16840859fd4c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/paalfredrik/sanity-gatsby-blog-4',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-4-web.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
