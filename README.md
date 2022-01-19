![GitHub Repo stars](https://img.shields.io/github/stars/CFenner/MMM-PersonalConfig-Template?style=social)

# MMM-PersonalConfig

This is a module for the [MagicMirror²](https://magicmirror.builders/) to persist it's configuration in a GitHub repository.

## Usage

To use this module, make a copy of your own by clicking the "Use this Template" button.

⚠️ Make sure you [*make the repository private*](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility#making-a-repository-private) before you commit any secrets (API keys, IPs, calendar feeds, username/password) to it.

👍 Please leave a GitHub ⭐ if you use and like this module.

### Installation

Navigate into your MagicMirror's modules folder:

```shell
cd ~/MagicMirror/modules
```

Clone this repository:

```shell
git clone <url-to-your-template-copy> MMM-PersonalConfig
```

Navigate to the new MMM-PersonalConfig folder and init the module. Make sure you moved your config files over before.

```shell
cd MMM-PersonalConfig/ && npm run link
```
