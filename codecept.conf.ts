export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    // Playwright: {
    //   browser: 'chromium',
    //   url: 'http://localhost',
    //   show: true
    // }, 

    GraphQL: {
      endpoint: 'http://localhost:8080/apis/graphql'
    },

    JSONResponse: {
      requestHelper: 'GraphQL'
    }
    
  },
  include: {
    I: './steps_file'
  },
  name: 'employee-management-api-test'
}