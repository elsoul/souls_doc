---
id: doc1
title: Introduction
sidebar_label: Introduction
slug: /
---



## Usage - 1. GraphQL API

```bash
# Ruby version (using rbenv)
$ ruby -v
ruby 3.0.0p0 (2020-12-25 revision 95aff21468) [x86_64-darwin20]

# Install xcode
$ xcode-select --install

# Install PostgreSQL (Mac env)
$ brew install postgresql

# Install redis
$ brew install redis

# Version Check
$ souls -v

# Init SOULs App
$ souls new app_name
$ cd app_name
$ bundle

# Run Dev & Test DB
$ souls i run_psql

# Create DB
$ souls db:create

# Migrate DB
$ souls db:migrate

# Create Test DB
$ souls db:seed

# Development (localhost:3000/playground)
$ souls s

# Development with Worker (localhost:3000/playground; localhost:3000/sidekiq)
$ foreman start -f Procfile.dev

# Test
$ bundle exec rspec

# Deploy (Edit: ./cloudbuild.yml)
$ souls deploy

