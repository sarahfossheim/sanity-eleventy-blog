export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ee68ab2865944a376ad832e',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-83667j5e',
                  apiId: '91878223-ffe2-4336-916b-22070dd63e3d'
                },
                {
                  buildHookId: '5ee68ab2caf7f735050bbbd6',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-ne8x3eob',
                  apiId: '4dedeb60-ca6e-4d16-80c0-7373c58d0855'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sarahfossheim/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-ne8x3eob.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
