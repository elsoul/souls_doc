(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{75:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return a})),t.d(e,"metadata",(function(){return l})),t.d(e,"toc",(function(){return i})),t.d(e,"default",(function(){return c}));var s=t(3),o=t(7),r=(t(0),t(89)),a={id:"doc1",title:"Introduction",sidebar_label:"Introduction",slug:"/"},l={unversionedId:"doc1",id:"doc1",isDocsHomePage:!1,title:"Introduction",description:"Usage - 1. GraphQL API",source:"@site/docs/doc1.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/elsoul/souls/edit/master/website/docs/doc1.md",version:"current",sidebar_label:"Introduction",sidebar:"someSidebar",next:{title:"Contributing",permalink:"/docs/doc2"}},i=[{value:"Usage - 1. GraphQL API",id:"usage---1-graphql-api",children:[]}],d={toc:i};function c(n){var e=n.components,t=Object(o.a)(n,["components"]);return Object(r.b)("wrapper",Object(s.a)({},d,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"usage---1-graphql-api"},"Usage - 1. GraphQL API"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"# Ruby version (using rbenv)\n$ ruby -v\nruby 3.0.0p0 (2020-12-25 revision 95aff21468) [x86_64-darwin20]\n\n# Install xcode\n$ xcode-select --install\n\n# Install PostgreSQL (Mac env)\n$ brew install postgresql\n\n# Install redis\n$ brew install redis\n\n# Version Check\n$ souls -v\n\n# Init SOULs App\n$ souls new app_name\n$ cd app_name\n$ bundle\n\n# Run Dev & Test DB\n$ souls i run_psql\n\n# Create DB\n$ souls db:create\n\n# Migrate DB\n$ souls db:migrate\n\n# Create Test DB\n$ souls db:seed\n\n# Development (localhost:3000/playground)\n$ souls s\n\n# Development with Worker (localhost:3000/playground; localhost:3000/sidekiq)\n$ foreman start -f Procfile.dev\n\n# Test\n$ bundle exec rspec\n\n# Deploy (Edit: ./cloudbuild.yml)\n$ souls deploy\n\n\n")))}c.isMDXComponent=!0}}]);