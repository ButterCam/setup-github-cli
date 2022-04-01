# setup-github-cli

[![Actions Status](https://github.com/ButterCam/setup-github-cli/workflows/Build%20%26%20Test/badge.svg)](https://github.com/ButterCam/setup-github-cli/actions)

This github action allows for installation of the [Github CLI](https://github.com/cli/cli) to be used in your actions pipeline.

It has support for Linux, MacOS and Windows runners.

Github CLI allows you to do more with github specific features like releases, issues and pull requests in your Github Action workflow

# Usage

See [action.yml](action.yml)

Basic:
```yaml
steps:
- uses: actions/checkout@latest
- uses: ButterCam/setup-github-cli@master

- run: gh --version
```

Authorized calls to change things:
```yaml
steps:
- uses: actions/checkout@v1

- name: Install Github
    uses: ButterCam/setup-github-cli@master
    
- name: run gh commands
    env:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    run: |
         gh release
```

# License

The scripts and documentation in this project are released under the [MIT License](LICENSE)

# Contributions

Contributions are welcome!  See [Contributor's Guide](docs/contributors.md)
