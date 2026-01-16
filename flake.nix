{
  inputs = {
    nixpkgs = {
      url = "github:NixOS/nixpkgs";
    };
    flake-utils.url = "github:numtide/flake-utils";
  };
  outputs =
    { nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs { inherit system; };
        yarn-deps = pkgs.mkYarnModules {
          pname = "numerous-rutabagas-github-io-yarn-deps";
          version = "master";
          packageJSON = ./package.json;
          yarnLock = ./yarn.lock;
        };
      in
      {
        packages = {
          default = pkgs.stdenv.mkDerivation rec {
            name = "numerous-rutabagas-github-io";
            src = ./.;
            nativeBuildInputs = builtins.attrValues {
              inherit yarn-deps;
              inherit (pkgs) nodejs;
            };
            buildPhase = ''
              ln -s ${yarn-deps}/node_modules ./node_modules
              export PATH=${yarn-deps}/node_modules/.bin:$PATH
              npm run build
            '';
            installPhase = ''
              cp -r ./public $out
            '';
          };
        };
        devShells = {
          default = pkgs.mkShell {
            packages = builtins.attrValues {
              inherit yarn-deps;
              inherit (pkgs) nodejs yarn;
            };
            shellHook = ''
              rm -r ./node_modules
              ln -s ${yarn-deps}/node_modules ./node_modules
              export PATH=${yarn-deps}/node_modules/.bin:$PATH
            '';
          };
        };
      }
    );
}
