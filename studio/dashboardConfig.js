export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d9339c50359935edf553fed',
                  title: 'Sanity Studio',
                  name: 'test-inc-studio',
                  apiId: '2a913e70-e579-4594-9671-96a33a53a03b'
                },
                {
                  buildHookId: '5d9339c5d32d4d7c685d040a',
                  title: 'Blog Website',
                  name: 'test-inc',
                  apiId: '68ea785b-4f50-49b4-adc3-66685a68e9fc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/taranengermaar/test-inc',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://test-inc.netlify.com', category: 'apps'}
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
