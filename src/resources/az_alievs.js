export const data = [{
  "id": "b0bdee309a472f6ffca19cb7144f3c06ac41752c",
  "schema": "Company",
  "properties": {"name": ["AIMROC"]}
},
  {"id": "5e45bde2c2e109391ae1f9049f487077078de3bf", "schema": "Person", "properties": {"name": ["Leyla Aliyeva"]}},
  {
    "id": "6c98133a12035120f4cb63f369d817f4fe899164",
    "schema": "Ownership",
    "properties": {
      "owner": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "asset": ["b0bdee309a472f6ffca19cb7144f3c06ac41752c"],
      "role": ["Indirect Ownership"]
    }
  },
  {"id": "d412c23b95d0d42870ffac5a6d5f595cfb4af139", "schema": "Person", "properties": {"name": ["Arzu Aliyeva"]}},
  {
    "id": "bc53286ed3c1269be24d88827ced33a1507865d1",
    "schema": "Ownership",
    "properties": {
      "owner": ["d412c23b95d0d42870ffac5a6d5f595cfb4af139"],
      "asset": ["b0bdee309a472f6ffca19cb7144f3c06ac41752c"],
      "role": ["Indirect Ownership"]
    }
  },
  {
    "id": "fa02de2d07a1062c7da8187e831010086de8c377",
    "schema": "Person",
    "properties": {"name": ["Olivier Mestelan"]}
  },
  {
    "id": "a7522104103b70d702c1a7c3a71f8b956d24fc42",
    "schema": "Ownership",
    "properties": {
      "owner": ["fa02de2d07a1062c7da8187e831010086de8c377"],
      "asset": ["b0bdee309a472f6ffca19cb7144f3c06ac41752c"],
      "role": ["Indirect ownership"]
    }
  },
  {"id": "251e80661ad58a75f0048c629e101d1fca99e7ed", "schema": "Company", "properties": {"name": ["Azerfon"]}},
  {
    "id": "15389e591bc005cf601c55252f09ae481d9f5266",
    "schema": "Ownership",
    "properties": {
      "owner": ["d412c23b95d0d42870ffac5a6d5f595cfb4af139"],
      "asset": ["251e80661ad58a75f0048c629e101d1fca99e7ed"],
      "role": ["Indirect Ownership"]
    }
  },
  {
    "id": "0831df6eaf36fef2f3933e1ac95e8fec242944f3",
    "schema": "Ownership",
    "properties": {
      "owner": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "asset": ["251e80661ad58a75f0048c629e101d1fca99e7ed"],
      "role": ["Indirect Ownership"]
    }
  },
  {
    "id": "ade69374e3f57d2dfed29ca456e4f4105e9537fe",
    "schema": "Ownership",
    "properties": {
      "owner": ["fa02de2d07a1062c7da8187e831010086de8c377"],
      "asset": ["251e80661ad58a75f0048c629e101d1fca99e7ed"],
      "role": ["Indirect Ownership"]
    }
  },
  {
    "id": "674abda241e4972d17f2d83d078e3fdac84306ef",
    "schema": "Company",
    "properties": {"name": ["La Belleza Holdings"]}
  },
  {
    "id": "1c1b7cfb7e7bd8efaa775be4f98c5b0dafeeb0e7",
    "schema": "Ownership",
    "properties": {
      "startDate": ["2008-11-07"],
      "owner": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "asset": ["674abda241e4972d17f2d83d078e3fdac84306ef"],
      "role": ["Sole Shareholder"]
    }
  },
  {
    "id": "0321ff13ae605bbcb34c010bb492b39b93dee175",
    "schema": "Company",
    "properties": {"name": ["Harvard Management"]}
  },
  {
    "id": "8a4b463b0ea2738484d692d549dc4f13fa692d24",
    "schema": "Ownership",
    "properties": {
      "startDate": ["2008-11-07"],
      "owner": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "asset": ["0321ff13ae605bbcb34c010bb492b39b93dee175"],
      "role": ["Sole Shareholder"]
    }
  },
  {
    "id": "3d0b5ec631f65e2dbccda046a9fc4db3a1684ac9",
    "schema": "Company",
    "properties": {"name": ["Arbor Investments"]}
  },
  {
    "id": "d9dc4f7023bb112ea3bc37fb6210c9f42461adad",
    "schema": "Ownership",
    "properties": {
      "startDate": ["2008-11-07"],
      "owner": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "asset": ["3d0b5ec631f65e2dbccda046a9fc4db3a1684ac9"],
      "role": ["Sole Shareholder"]
    }
  },
  {"id": "121e29c47f875f8776a9a863265104dff0326cdf", "schema": "Company", "properties": {"name": ["Silkway Bank"]}},
  {
    "id": "14cba155ceb4d0bc4960823ca29d72349667a9f9",
    "schema": "Ownership",
    "properties": {
      "percentage": ["29.08"],
      "owner": ["d412c23b95d0d42870ffac5a6d5f595cfb4af139"],
      "asset": ["121e29c47f875f8776a9a863265104dff0326cdf"],
      "role": ["Part Owner"]
    }
  },
  {
    "id": "d5532891b924723b780d4dfe68ca81fd57bed4c9",
    "schema": "Person",
    "properties": {"name": ["Zarifa Hamzayeva"]}
  },
  {
    "id": "71dbff8d63ea7f9b525e19b0356c9e84caaee91d",
    "schema": "Ownership",
    "properties": {
      "owner": ["d5532891b924723b780d4dfe68ca81fd57bed4c9"],
      "asset": ["121e29c47f875f8776a9a863265104dff0326cdf"],
      "role": ["Part Owner"]
    }
  },
  {
    "id": "78e067664facea7203844398a13ab7441ad540cf",
    "schema": "Company",
    "properties": {"name": ["Zodiac Immobilienbesitz"]}
  },
  {
    "id": "6a867223c2c03c653652cb90b6f21c275ba9e1d1",
    "schema": "Ownership",
    "properties": {
      "startDate": ["2006-08-10"],
      "endDate": ["2013-08-28"],
      "owner": ["d412c23b95d0d42870ffac5a6d5f595cfb4af139"],
      "asset": ["78e067664facea7203844398a13ab7441ad540cf"],
      "role": ["Owner"]
    }
  },
  {"id": "e459190362658e88cb4301382cfb1bb3553f95ca", "schema": "Company", "properties": {"name": ["Bank VTB"]}},
  {
    "id": "4f576252a236522091fcedba42f2bacdf0be4ac1",
    "schema": "Ownership",
    "properties": {
      "owner": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "asset": ["e459190362658e88cb4301382cfb1bb3553f95ca"],
      "role": ["Indirect Ownership"]
    }
  },
  {
    "id": "69fe35c28139415aac2c996c8f6ddb908f5ec4ff",
    "schema": "Ownership",
    "properties": {
      "owner": ["d412c23b95d0d42870ffac5a6d5f595cfb4af139"],
      "asset": ["e459190362658e88cb4301382cfb1bb3553f95ca"],
      "role": ["Indirect Ownership"]
    }
  },
  {"id": "708c497d705d299ae116c13f3b721728b1cccaa6", "schema": "Person", "properties": {"name": ["Heydar Aliyev"]}},
  {
    "id": "c17dfdb779267d0343ac69b0d1273b86d7fdc5bf",
    "schema": "Ownership",
    "properties": {
      "owner": ["708c497d705d299ae116c13f3b721728b1cccaa6"],
      "asset": ["e459190362658e88cb4301382cfb1bb3553f95ca"],
      "role": ["Indirect Ownership"]
    }
  },
  {"id": "dab53a38876608a678a97f76b649f58754330896", "schema": "Company", "properties": {"name": ["Pasha Bank"]}},
  {"id": "2c6eba0af1cd2092cacb40207d5d67217408eacf", "schema": "Person", "properties": {"name": ["Arif Pashayev"]}},
  {
    "id": "34b8e26db0b929f5be7f14d89baffe5bf9ab056c",
    "schema": "Ownership",
    "properties": {
      "percentage": ["10"],
      "owner": ["2c6eba0af1cd2092cacb40207d5d67217408eacf"],
      "asset": ["dab53a38876608a678a97f76b649f58754330896"],
      "role": ["Part Owner"]
    }
  },
  {
    "id": "69f1e108ada27d04983f0607069b4c55ad9ba468",
    "schema": "Ownership",
    "properties": {
      "owner": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "asset": ["dab53a38876608a678a97f76b649f58754330896"],
      "role": ["\"Ultimately Controls\""]
    }
  },
  {
    "id": "93b12bf60202b12136f6beeb6a5a2929c04beb39",
    "schema": "Ownership",
    "properties": {
      "owner": ["d412c23b95d0d42870ffac5a6d5f595cfb4af139"],
      "asset": ["dab53a38876608a678a97f76b649f58754330896"],
      "role": ["\"Ultimately Controls\""]
    }
  },
  {"id": "927419b14549202a9d85bdd0607de874a74d99be", "schema": "Company", "properties": {"name": ["Kapital Bank"]}},
  {
    "id": "658bcbf64a163813805d733fbb937a22524283f8",
    "schema": "Ownership",
    "properties": {
      "owner": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "asset": ["927419b14549202a9d85bdd0607de874a74d99be"],
      "role": ["\"Ultimately Controls\""]
    }
  },
  {
    "id": "01829e1db9b409296dc7ca76f31c6959da1fbc9f",
    "schema": "Ownership",
    "properties": {
      "owner": ["d412c23b95d0d42870ffac5a6d5f595cfb4af139"],
      "asset": ["927419b14549202a9d85bdd0607de874a74d99be"],
      "role": ["\"Ultimately Controls\""]
    }
  },
  {"id": "3768fd5ccab5e5e31687ba7dff4732ecdece2512", "schema": "Company", "properties": {"name": ["Xalq Bank"]}},
  {
    "id": "62ab35c823cfcd8b38aebea0535d867dd0b2088c",
    "schema": "Ownership",
    "properties": {
      "startDate": ["2004"],
      "owner": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "asset": ["3768fd5ccab5e5e31687ba7dff4732ecdece2512"],
      "role": ["\"Ultimately Controls\""]
    }
  },
  {"id": "4122b582e02027180a8085ca0bb29a6b39fa5978", "schema": "Company", "properties": {"name": ["Ata Bank"]}},
  {"id": "de9ee7eb3aedacb6f826ccb60f842dbfeb36bd06", "schema": "Person", "properties": {"name": ["Kamil Asharfov"]}},
  {
    "id": "edc2c40e46157943a2f69bffb28a509a79109d68",
    "schema": "Ownership",
    "properties": {
      "owner": ["de9ee7eb3aedacb6f826ccb60f842dbfeb36bd06"],
      "asset": ["4122b582e02027180a8085ca0bb29a6b39fa5978"],
      "role": ["Ownership"]
    }
  },
  {
    "id": "87c27691c4f05cd6963f238d540b6a742c54fc26",
    "schema": "Company",
    "properties": {"name": ["Rosamund International"]}
  },
  {"id": "c83938110cc22b1ece857236789bacc91904dd06", "schema": "Person", "properties": {"name": ["Ilham Aliyev"]}},
  {
    "id": "01e31355a4964401259bf35596c16ad27a8dc8ee",
    "schema": "Ownership",
    "properties": {
      "startDate": ["2003-01-14"],
      "owner": ["c83938110cc22b1ece857236789bacc91904dd06"],
      "asset": ["87c27691c4f05cd6963f238d540b6a742c54fc26"],
      "role": ["Ownership"]
    }
  },
  {
    "id": "0453af3e8bdde2e0d279166387c3e172a0edca13",
    "schema": "Person",
    "properties": {"name": ["Mehriban Aliyeva"]}
  },
  {
    "id": "5742ac7c3ad0175ed4e287b0ba595fa9c70c752f",
    "schema": "Ownership",
    "properties": {
      "startDate": ["2003-01-14"],
      "owner": ["0453af3e8bdde2e0d279166387c3e172a0edca13"],
      "asset": ["87c27691c4f05cd6963f238d540b6a742c54fc26"],
      "role": ["Ownership"]
    }
  },
  {"id": "ece24fe1a5b440b02ddca13548d8a0682c084d2e", "schema": "Company", "properties": {"name": ["Pasha Holding"]}},
  {
    "id": "1f25ab0f1e204f759e5dcd64375dab10a8891b5a",
    "schema": "Ownership",
    "properties": {
      "owner": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "asset": ["ece24fe1a5b440b02ddca13548d8a0682c084d2e"],
      "role": ["\"Ultimately Controls\""]
    }
  },
  {
    "id": "74c2dced7c9c4f8f4af15ba6ae8a3ba44e3958f9",
    "schema": "Ownership",
    "properties": {
      "owner": ["d412c23b95d0d42870ffac5a6d5f595cfb4af139"],
      "asset": ["ece24fe1a5b440b02ddca13548d8a0682c084d2e"],
      "role": ["\"Ultimately Controls\""]
    }
  },
  {"id": "a7fe9d2eae2d88a80234c40f2daa65d854f0cd5b", "schema": "Company", "properties": {"name": ["Absheron Group"]}},
  {
    "id": "e2036616bdb947a7366eeecae0372f3e68ee4504",
    "schema": "Ownership",
    "properties": {
      "owner": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "asset": ["a7fe9d2eae2d88a80234c40f2daa65d854f0cd5b"],
      "role": ["\"Ultimately Controls\""]
    }
  },
  {
    "id": "fd7d99380a1a83fa5ca335236481e94610f39603",
    "schema": "Ownership",
    "properties": {
      "owner": ["d412c23b95d0d42870ffac5a6d5f595cfb4af139"],
      "asset": ["a7fe9d2eae2d88a80234c40f2daa65d854f0cd5b"],
      "role": ["\"Ultimately Controls\""]
    }
  },
  {
    "id": "1c015b58d72cca858067b037d86348f36f961f25",
    "schema": "Company",
    "properties": {"name": ["Four Seasons Hotel"]}
  },
  {
    "id": "dac0055270dcbc4e0bb091d6796720cca003e174",
    "schema": "Ownership",
    "properties": {
      "owner": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "asset": ["1c015b58d72cca858067b037d86348f36f961f25"],
      "role": ["\"Ultimately Controls\""]
    }
  },
  {
    "id": "7b4b6b955f699869d7de1c5950a9758288b64fba",
    "schema": "Ownership",
    "properties": {
      "owner": ["d412c23b95d0d42870ffac5a6d5f595cfb4af139"],
      "asset": ["1c015b58d72cca858067b037d86348f36f961f25"],
      "role": ["\"Ultimately Controls\""]
    }
  },
  {"id": "7ce99c16990557f8a859a6c6ab080dc8cf1e1506", "schema": "Company", "properties": {"name": ["Marriot"]}},
  {
    "id": "65a9a3dd311cb32aaba429f2d533c2025de85996",
    "schema": "Ownership",
    "properties": {
      "owner": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "asset": ["7ce99c16990557f8a859a6c6ab080dc8cf1e1506"],
      "role": ["\"Ultimately Controls\""]
    }
  },
  {
    "id": "9aaacaa1b17fb6512b5f5abaca7bc6cfca79f928",
    "schema": "Ownership",
    "properties": {
      "owner": ["d412c23b95d0d42870ffac5a6d5f595cfb4af139"],
      "asset": ["7ce99c16990557f8a859a6c6ab080dc8cf1e1506"],
      "role": ["\"Ultimately Controls\""]
    }
  },
  {
    "id": "668827f4b37fa8734552899db0064cf050798775",
    "schema": "Company",
    "properties": {"name": ["Park Chalet Shahdagh"]}
  },
  {
    "id": "78291c981c21eaf3b13c7f2a8bc9b2d0189e07fe",
    "schema": "Ownership",
    "properties": {
      "owner": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "asset": ["668827f4b37fa8734552899db0064cf050798775"],
      "role": ["\"Ultimately Controls\""]
    }
  },
  {
    "id": "1b561fc2a3f044aa7491e21ea399a37d33a8affb",
    "schema": "Ownership",
    "properties": {
      "owner": ["d412c23b95d0d42870ffac5a6d5f595cfb4af139"],
      "asset": ["668827f4b37fa8734552899db0064cf050798775"],
      "role": ["\"Ultimately Controls\""]
    }
  },
  {"id": "4aff7f93dc552f022badf36341046178d9074d07", "schema": "Company", "properties": {"name": ["Dinamo"]}},
  {
    "id": "295647233f8ac2b265fe3daa133c983989994cf1",
    "schema": "Ownership",
    "properties": {
      "owner": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "asset": ["4aff7f93dc552f022badf36341046178d9074d07"],
      "role": ["\"Ultimately Controls\""]
    }
  },
  {
    "id": "81ad3f96193a6acfe7a3dc1bdeff927acd83ac64",
    "schema": "Ownership",
    "properties": {
      "owner": ["d412c23b95d0d42870ffac5a6d5f595cfb4af139"],
      "asset": ["4aff7f93dc552f022badf36341046178d9074d07"],
      "role": ["\"Ultimately Controls\""]
    }
  },
  {"id": "b647d3196e5f65a92c8de26bd79b5466fa9c0483", "schema": "Company", "properties": {"name": ["Intourist"]}},
  {
    "id": "94ce5afd8e79fd4d18ad2815834e095fe2d7699d",
    "schema": "Ownership",
    "properties": {
      "owner": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "asset": ["b647d3196e5f65a92c8de26bd79b5466fa9c0483"],
      "role": ["\"Ultimately Controls\""]
    }
  },
  {
    "id": "34056bca938d63822b66bfc4de17121c0ca4f370",
    "schema": "Ownership",
    "properties": {
      "owner": ["d412c23b95d0d42870ffac5a6d5f595cfb4af139"],
      "asset": ["b647d3196e5f65a92c8de26bd79b5466fa9c0483"],
      "role": ["\"Ultimately Controls\""]
    }
  },
  {
    "id": "28cb7a09ba49761e2ccd51137ff9d535219d0b58",
    "schema": "Company",
    "properties": {"name": ["Pik Palace Shahdagh"]}
  },
  {
    "id": "136f7750d885e238dbddad304de5114108ee40d5",
    "schema": "Ownership",
    "properties": {
      "owner": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "asset": ["28cb7a09ba49761e2ccd51137ff9d535219d0b58"],
      "role": ["\"Ultimately Controls\""]
    }
  },
  {
    "id": "3d78a3398ff609c9573ff0ef5a9d6829896c6324",
    "schema": "Ownership",
    "properties": {
      "owner": ["d412c23b95d0d42870ffac5a6d5f595cfb4af139"],
      "asset": ["28cb7a09ba49761e2ccd51137ff9d535219d0b58"],
      "role": ["\"Ultimately Controls\""]
    }
  },
  {"id": "59bdf887ebd14f45b1dcce78c56245a5412616e2", "schema": "Company", "properties": {"name": ["Boulevard"]}},
  {
    "id": "a8766c51d42102a7e77391b4aeab61814613f693",
    "schema": "Ownership",
    "properties": {
      "owner": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "asset": ["59bdf887ebd14f45b1dcce78c56245a5412616e2"],
      "role": ["\"Ultimately Controls\""]
    }
  },
  {
    "id": "8144ab040b3c9c11fa27e8a7ea7a390697a1d8a3",
    "schema": "Ownership",
    "properties": {
      "owner": ["d412c23b95d0d42870ffac5a6d5f595cfb4af139"],
      "asset": ["59bdf887ebd14f45b1dcce78c56245a5412616e2"],
      "role": ["\"Ultimately Controls\""]
    }
  },
  {"id": "77d34220d673d9f9a264f4c22869cf67fd159db4", "schema": "Company", "properties": {"name": ["Samaxi Palace"]}},
  {
    "id": "ed2016beff0cbf6bbe6c8e3b087027f20e538585",
    "schema": "Ownership",
    "properties": {
      "owner": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "asset": ["77d34220d673d9f9a264f4c22869cf67fd159db4"],
      "role": ["\"Ultimately Controls\""]
    }
  },
  {
    "id": "16415628bc5a1989b12318caf868a3f66e9f3f8b",
    "schema": "Ownership",
    "properties": {
      "owner": ["d412c23b95d0d42870ffac5a6d5f595cfb4af139"],
      "asset": ["77d34220d673d9f9a264f4c22869cf67fd159db4"],
      "role": ["\"Ultimately Controls\""]
    }
  },
  {"id": "5bc75be616608ae3fa10d994f8d7d7a18dc24bf0", "schema": "Company", "properties": {"name": ["Sheraton"]}},
  {
    "id": "2cd115f93fecb2c0183f940e3ffbd63545631b72",
    "schema": "Ownership",
    "properties": {
      "owner": ["d412c23b95d0d42870ffac5a6d5f595cfb4af139"],
      "asset": ["5bc75be616608ae3fa10d994f8d7d7a18dc24bf0"],
      "role": ["\"Ultimately Controls\""]
    }
  },
  {
    "id": "82cfe72a27884f55c7271bbd13536ed5a2a17a8e",
    "schema": "Company",
    "properties": {"name": ["Beckforth Services Limited"]}
  },
  {
    "id": "900c602b68d3241cf74432718f62f2ce7714c1c9",
    "schema": "Ownership",
    "properties": {
      "owner": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "asset": ["82cfe72a27884f55c7271bbd13536ed5a2a17a8e"],
      "role": ["Ownership"]
    }
  },
  {
    "id": "eeb20e8485ff7d51e092590dd00f449876413583",
    "schema": "Ownership",
    "properties": {
      "owner": ["c83938110cc22b1ece857236789bacc91904dd06"],
      "asset": ["82cfe72a27884f55c7271bbd13536ed5a2a17a8e"],
      "role": ["Former Owner"]
    }
  },
  {
    "id": "4afbc98c6b9b4271970344a9fb72bb68e4976937",
    "schema": "Ownership",
    "properties": {
      "owner": ["0453af3e8bdde2e0d279166387c3e172a0edca13"],
      "asset": ["82cfe72a27884f55c7271bbd13536ed5a2a17a8e"],
      "role": ["Former Owner"]
    }
  },
  {
    "id": "eb6a68903763f4cbd40f291aa1bf8a41b224b5ee",
    "schema": "Company",
    "properties": {"name": ["Arblos Management Corp"]}
  },
  {
    "id": "11abbf3737dcca5f44bc4e144d76b1207fe98d25",
    "schema": "Directorship",
    "properties": {
      "startDate": ["2006-08-11"],
      "role": ["Director"],
      "director": ["d412c23b95d0d42870ffac5a6d5f595cfb4af139"],
      "organization": ["eb6a68903763f4cbd40f291aa1bf8a41b224b5ee"]
    }
  },
  {
    "id": "c357173f2158e66eb3d4a3432f23a662bf1f907f",
    "schema": "Directorship",
    "properties": {
      "startDate": ["2006-08-11"],
      "role": ["Director"],
      "director": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "organization": ["eb6a68903763f4cbd40f291aa1bf8a41b224b5ee"]
    }
  },
  {
    "id": "a56c723da0ee07f47513e1a77fa7d32351855541",
    "schema": "Directorship",
    "properties": {
      "startDate": ["2006-08-11"],
      "endDate": ["2012-06-01"],
      "role": ["Former Director"],
      "director": ["fa02de2d07a1062c7da8187e831010086de8c377"],
      "organization": ["eb6a68903763f4cbd40f291aa1bf8a41b224b5ee"]
    }
  },
  {
    "id": "6534b7014a1da8d0c0d89600751a18ac32cfd1a8",
    "schema": "Company",
    "properties": {"name": ["Hising Management S.A."]}
  },
  {
    "id": "fa36c4cc10be69937b2b8bf398b6fb85d5178cc9",
    "schema": "Directorship",
    "properties": {
      "startDate": ["2006-08-11"],
      "role": ["Director"],
      "director": ["d412c23b95d0d42870ffac5a6d5f595cfb4af139"],
      "organization": ["6534b7014a1da8d0c0d89600751a18ac32cfd1a8"]
    }
  },
  {
    "id": "b61be877347c26cef2ee39f3514b42b6171a84f2",
    "schema": "Directorship",
    "properties": {
      "startDate": ["2006-08-11"],
      "role": ["Director"],
      "director": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "organization": ["6534b7014a1da8d0c0d89600751a18ac32cfd1a8"]
    }
  },
  {
    "id": "4aeb871a007a3d347daf8249b1669128102a6659",
    "schema": "Directorship",
    "properties": {
      "startDate": ["2006-08-11"],
      "role": ["Former Director"],
      "director": ["fa02de2d07a1062c7da8187e831010086de8c377"],
      "organization": ["6534b7014a1da8d0c0d89600751a18ac32cfd1a8"]
    }
  },
  {
    "id": "7b5b9d43e8ed2f2770f93560f4744d1da0b4e87f",
    "schema": "Company",
    "properties": {"name": ["Lynden Management Group Inc."]}
  },
  {
    "id": "b1e0376f18aa6de387fc3ab08a4b84c8a0041cc6",
    "schema": "Directorship",
    "properties": {
      "startDate": ["2006-08-14"],
      "role": ["Director"],
      "director": ["d412c23b95d0d42870ffac5a6d5f595cfb4af139"],
      "organization": ["7b5b9d43e8ed2f2770f93560f4744d1da0b4e87f"]
    }
  },
  {
    "id": "8999c0755cc4a7200d79aa56ca9d0cc6d9ea33d5",
    "schema": "Directorship",
    "properties": {
      "startDate": ["2006-08-14"],
      "role": ["Director"],
      "director": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "organization": ["7b5b9d43e8ed2f2770f93560f4744d1da0b4e87f"]
    }
  },
  {
    "id": "5f0856add948df2c79a84de2ebf491c3db7ba4a7",
    "schema": "Directorship",
    "properties": {
      "startDate": ["2006-08-14"],
      "endDate": ["2012-06-01"],
      "role": ["Former Director"],
      "director": ["fa02de2d07a1062c7da8187e831010086de8c377"],
      "organization": ["7b5b9d43e8ed2f2770f93560f4744d1da0b4e87f"]
    }
  },
  {
    "id": "b4df4dadb84cf9a0831e8e97f66260da78d4af4c",
    "schema": "Company",
    "properties": {"name": ["Hughson Management"]}
  },
  {
    "id": "543a79103ff2b60255c0f4f5a212092cb5286888",
    "schema": "Directorship",
    "properties": {
      "startDate": ["2006-06-07"],
      "role": ["Director"],
      "director": ["d412c23b95d0d42870ffac5a6d5f595cfb4af139"],
      "organization": ["b4df4dadb84cf9a0831e8e97f66260da78d4af4c"]
    }
  },
  {
    "id": "e8ec6d7cba528888533929a01a65f6335f21e286",
    "schema": "Directorship",
    "properties": {
      "startDate": ["2006-06-07"],
      "role": ["Director"],
      "director": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "organization": ["b4df4dadb84cf9a0831e8e97f66260da78d4af4c"]
    }
  },
  {
    "id": "445f0ec06e5a128807296fbe54217e2d4b213e8a",
    "schema": "Directorship",
    "properties": {
      "startDate": ["2006-06-07"],
      "endDate": ["2012-04-02"],
      "role": ["Former Director"],
      "director": ["fa02de2d07a1062c7da8187e831010086de8c377"],
      "organization": ["b4df4dadb84cf9a0831e8e97f66260da78d4af4c"]
    }
  },
  {
    "id": "cb33f5fbcbbe53f9c597c2dc1a382f7de903b1d5",
    "schema": "Company",
    "properties": {"name": ["Gladwyn Management"]}
  },
  {
    "id": "2f2467c595374b424fdf19b006f69e6ef0ac0aa7",
    "schema": "Directorship",
    "properties": {
      "startDate": ["2006-06-09"],
      "role": ["Director"],
      "director": ["d412c23b95d0d42870ffac5a6d5f595cfb4af139"],
      "organization": ["cb33f5fbcbbe53f9c597c2dc1a382f7de903b1d5"]
    }
  },
  {
    "id": "ae979669d1736106b735986654aa28671a52a714",
    "schema": "Directorship",
    "properties": {
      "startDate": ["2006-06-09"],
      "role": ["Director"],
      "director": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "organization": ["cb33f5fbcbbe53f9c597c2dc1a382f7de903b1d5"]
    }
  },
  {
    "id": "d7ce98fd4de85a1870090f9cc8eb0ed44354a2ff",
    "schema": "Directorship",
    "properties": {
      "startDate": ["2006-06-09"],
      "endDate": ["2012-04-02"],
      "role": ["Former Director"],
      "director": ["fa02de2d07a1062c7da8187e831010086de8c377"],
      "organization": ["cb33f5fbcbbe53f9c597c2dc1a382f7de903b1d5"]
    }
  },
  {
    "id": "281104fd177fd38c35aa4b1ec72b9e8023f2c19a",
    "schema": "Company",
    "properties": {"name": ["Grinnell Management Inc."]}
  },
  {
    "id": "cc4bdf4a160fb1ea34b766d666d57d8dcc67ebe0",
    "schema": "Directorship",
    "properties": {
      "startDate": ["2006-07-28"],
      "role": ["Director"],
      "director": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "organization": ["281104fd177fd38c35aa4b1ec72b9e8023f2c19a"]
    }
  },
  {
    "id": "509b9fa8c75ea3d1cfdb8d7a7a72d585b9c73d10",
    "schema": "Directorship",
    "properties": {
      "startDate": ["2006-07-28"],
      "role": ["Director"],
      "director": ["d412c23b95d0d42870ffac5a6d5f595cfb4af139"],
      "organization": ["281104fd177fd38c35aa4b1ec72b9e8023f2c19a"]
    }
  },
  {
    "id": "86a0660d93d67b4d0f2aa70a12d7d1bcf45fb37b",
    "schema": "Directorship",
    "properties": {
      "startDate": ["2006-07-28"],
      "endDate": ["2012-04-02"],
      "role": ["Former Director"],
      "director": ["fa02de2d07a1062c7da8187e831010086de8c377"],
      "organization": ["281104fd177fd38c35aa4b1ec72b9e8023f2c19a"]
    }
  },
  {
    "id": "b4d85f2981a37456eb176fe82c22c52fd660a761",
    "schema": "Directorship",
    "properties": {
      "startDate": ["2008-11-07"],
      "role": ["Director"],
      "director": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "organization": ["674abda241e4972d17f2d83d078e3fdac84306ef"]
    }
  },
  {"id": "a32c435fa20357c1a842df5a2245a856d8f3945d", "schema": "Person", "properties": {"name": ["Hassan Gozal"]}},
  {
    "id": "4fb522f52b101bf85c62788402c3cf6f9666b3b5",
    "schema": "Directorship",
    "properties": {
      "startDate": ["2008-11-07"],
      "role": ["Director"],
      "director": ["a32c435fa20357c1a842df5a2245a856d8f3945d"],
      "organization": ["674abda241e4972d17f2d83d078e3fdac84306ef"]
    }
  },
  {"id": "26eb396a0c559a7da90f42324fb5f7d6cba19b42", "schema": "Person", "properties": {"name": ["Rizduan Salleh"]}},
  {
    "id": "ad1c3fa6edf3b1df2ad9ebf8978cfa40e41870be",
    "schema": "Directorship",
    "properties": {
      "startDate": ["2008-11-07"],
      "role": ["Director"],
      "director": ["26eb396a0c559a7da90f42324fb5f7d6cba19b42"],
      "organization": ["674abda241e4972d17f2d83d078e3fdac84306ef"]
    }
  },
  {
    "id": "3649bb708c38fb0a9d77531873b6f6205f747adf",
    "schema": "Directorship",
    "properties": {
      "startDate": ["2008-11-07"],
      "role": ["Director"],
      "director": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "organization": ["0321ff13ae605bbcb34c010bb492b39b93dee175"]
    }
  },
  {
    "id": "394c145e8662ec481cdf44aeaedd25742c633a3f",
    "schema": "Directorship",
    "properties": {
      "startDate": ["2008-11-07"],
      "role": ["Director"],
      "director": ["a32c435fa20357c1a842df5a2245a856d8f3945d"],
      "organization": ["0321ff13ae605bbcb34c010bb492b39b93dee175"]
    }
  },
  {
    "id": "b3403b37cbfb50e595d855868c0a66dabdc6b56c",
    "schema": "Directorship",
    "properties": {
      "startDate": ["2008-11-07"],
      "role": ["Director"],
      "director": ["26eb396a0c559a7da90f42324fb5f7d6cba19b42"],
      "organization": ["0321ff13ae605bbcb34c010bb492b39b93dee175"]
    }
  },
  {
    "id": "fd3e0c7759c5077ebaba580d2475f790ef523793",
    "schema": "Directorship",
    "properties": {
      "startDate": ["2008-11-07"],
      "role": ["Director"],
      "director": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "organization": ["3d0b5ec631f65e2dbccda046a9fc4db3a1684ac9"]
    }
  },
  {
    "id": "971ea6ab11c1846805bd0459443095c3d564bc01",
    "schema": "Directorship",
    "properties": {
      "startDate": ["2008-11-07"],
      "role": ["Director"],
      "director": ["a32c435fa20357c1a842df5a2245a856d8f3945d"],
      "organization": ["3d0b5ec631f65e2dbccda046a9fc4db3a1684ac9"]
    }
  },
  {
    "id": "b361099d4547224c4ea677a8aa9c1574ce08d30a",
    "schema": "Directorship",
    "properties": {
      "startDate": ["2008-11-07"],
      "role": ["Director"],
      "director": ["26eb396a0c559a7da90f42324fb5f7d6cba19b42"],
      "organization": ["3d0b5ec631f65e2dbccda046a9fc4db3a1684ac9"]
    }
  },
  {
    "id": "f5d4a45ec3813918bcd16b68c0b9778d0782161d",
    "schema": "Directorship",
    "properties": {
      "startDate": ["2003-01-14"],
      "role": ["Director"],
      "director": ["c83938110cc22b1ece857236789bacc91904dd06"],
      "organization": ["87c27691c4f05cd6963f238d540b6a742c54fc26"]
    }
  },
  {
    "id": "42586df99142c5164e02b893bab8f0571c98cffd",
    "schema": "Directorship",
    "properties": {
      "startDate": ["2003-01-14"],
      "role": ["Director"],
      "director": ["0453af3e8bdde2e0d279166387c3e172a0edca13"],
      "organization": ["87c27691c4f05cd6963f238d540b6a742c54fc26"]
    }
  },
  {
    "id": "caf17585d57e2a4d91df9b1c1c3d28bf781f0f5e",
    "schema": "Company",
    "properties": {"name": ["Lustin Holdings"]}
  },
  {
    "id": "4775f4ebddf6e737fe8508547d52c4efb65dfe68",
    "schema": "Directorship",
    "properties": {
      "startDate": ["2004-11-26"],
      "role": ["Director"],
      "director": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "organization": ["caf17585d57e2a4d91df9b1c1c3d28bf781f0f5e"]
    }
  },
  {
    "id": "9e35d196ca9c960c2a3a7ccdee893101ff9cbced",
    "schema": "Directorship",
    "properties": {
      "startDate": ["2004-11-26"],
      "role": ["Director"],
      "director": ["d412c23b95d0d42870ffac5a6d5f595cfb4af139"],
      "organization": ["caf17585d57e2a4d91df9b1c1c3d28bf781f0f5e"]
    }
  },
  {
    "id": "ce9a300e23197adfc0e6956cdf69504b10aa8d10",
    "schema": "Directorship",
    "properties": {
      "startDate": ["2004-11-26"],
      "role": ["Director"],
      "director": ["0453af3e8bdde2e0d279166387c3e172a0edca13"],
      "organization": ["caf17585d57e2a4d91df9b1c1c3d28bf781f0f5e"]
    }
  },
  {
    "id": "bee52776a33eb1557f27921b257cffe645ff69c5",
    "schema": "Company",
    "properties": {"name": ["Disul Investments"]}
  },
  {
    "id": "484103a61d9c94cbca11c41f014967b274b1693c",
    "schema": "Directorship",
    "properties": {
      "startDate": ["2004-11-17"],
      "role": ["Director"],
      "director": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "organization": ["bee52776a33eb1557f27921b257cffe645ff69c5"]
    }
  },
  {
    "id": "5bd575db69c7922570e84121e74bd4bf1596493b",
    "schema": "Directorship",
    "properties": {
      "startDate": ["2004-11-17"],
      "role": ["Director"],
      "director": ["d412c23b95d0d42870ffac5a6d5f595cfb4af139"],
      "organization": ["bee52776a33eb1557f27921b257cffe645ff69c5"]
    }
  },
  {
    "id": "5f633f4f0a1eccb454f3535c58ce8485de56a100",
    "schema": "Directorship",
    "properties": {
      "startDate": ["2004-11-17"],
      "role": ["Director"],
      "director": ["0453af3e8bdde2e0d279166387c3e172a0edca13"],
      "organization": ["bee52776a33eb1557f27921b257cffe645ff69c5"]
    }
  },
  {
    "id": "060d1c8744fd9401c1a4a959605d0edff0399e04",
    "schema": "Company",
    "properties": {"name": ["Bondil Holdings"]}
  },
  {
    "id": "dd9752f02a6c55189a978fecca27241f4ba421af",
    "schema": "Directorship",
    "properties": {
      "startDate": ["2004-11-26"],
      "role": ["Director"],
      "director": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "organization": ["060d1c8744fd9401c1a4a959605d0edff0399e04"]
    }
  },
  {
    "id": "d7715860e98cbc7cbbe78a1b71d7284903378d79",
    "schema": "Directorship",
    "properties": {
      "startDate": ["2004-11-26"],
      "role": ["Director"],
      "director": ["d412c23b95d0d42870ffac5a6d5f595cfb4af139"],
      "organization": ["060d1c8744fd9401c1a4a959605d0edff0399e04"]
    }
  },
  {
    "id": "a7a178ad014ea2f5f4ec647665cacafe2e2acfa8",
    "schema": "Directorship",
    "properties": {
      "startDate": ["2004-11-26"],
      "role": ["Director"],
      "director": ["0453af3e8bdde2e0d279166387c3e172a0edca13"],
      "organization": ["060d1c8744fd9401c1a4a959605d0edff0399e04"]
    }
  },
  {
    "id": "4f02b0c9eaa1e929063527adbdfb1138ffd5fc9b",
    "schema": "Company",
    "properties": {"name": ["Almira Management"]}
  },
  {
    "id": "f648dbddb66cd8c850c840bb8720f39c4783bed7",
    "schema": "Directorship",
    "properties": {
      "startDate": ["2005-07-20"],
      "role": ["Director"],
      "director": ["0453af3e8bdde2e0d279166387c3e172a0edca13"],
      "organization": ["4f02b0c9eaa1e929063527adbdfb1138ffd5fc9b"]
    }
  },
  {
    "id": "6d410ebebe87e65943d35d88cfbd0e54215ddb27",
    "schema": "Directorship",
    "properties": {
      "startDate": ["2005-07-20"],
      "role": ["Director"],
      "director": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "organization": ["4f02b0c9eaa1e929063527adbdfb1138ffd5fc9b"]
    }
  },
  {
    "id": "401fa7f8273ecfe54b3dde363d68adabda69bd49",
    "schema": "Directorship",
    "properties": {
      "startDate": ["2005-07-20"],
      "role": ["Director"],
      "director": ["d412c23b95d0d42870ffac5a6d5f595cfb4af139"],
      "organization": ["4f02b0c9eaa1e929063527adbdfb1138ffd5fc9b"]
    }
  },
  {
    "id": "e35ef319eb04492c489250cfc3f77be6fa2a3ef8",
    "schema": "Company",
    "properties": {"name": ["Ripley Management S.A."]}
  },
  {
    "id": "b1dde313663757c55a520d6a7ecec1e7685fe072",
    "schema": "Directorship",
    "properties": {
      "role": ["Director"],
      "director": ["0453af3e8bdde2e0d279166387c3e172a0edca13"],
      "organization": ["e35ef319eb04492c489250cfc3f77be6fa2a3ef8"]
    }
  },
  {
    "id": "57fd035d70d6a580f25d3ea933152e7cc2922862",
    "schema": "Directorship",
    "properties": {
      "role": ["Director"],
      "director": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "organization": ["e35ef319eb04492c489250cfc3f77be6fa2a3ef8"]
    }
  },
  {
    "id": "edd73be4c962eb562469512ba43f36fe18c366a4",
    "schema": "Directorship",
    "properties": {
      "role": ["Director"],
      "director": ["d412c23b95d0d42870ffac5a6d5f595cfb4af139"],
      "organization": ["e35ef319eb04492c489250cfc3f77be6fa2a3ef8"]
    }
  },
  {"id": "66f3136c08ce5635e6381fbfced0bb903244bf06", "schema": "Company", "properties": {"name": ["AtaHolding"]}},
  {
    "id": "dd125e49e019675bfe404132b1c99e54d2667823",
    "schema": "UnknownLink",
    "properties": {
      "role": ["Unknown"],
      "subject": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "object": ["66f3136c08ce5635e6381fbfced0bb903244bf06"]
    }
  },
  {
    "id": "55277e4aa63cc6f93fe19a2ff2843cb6d61fbd12",
    "schema": "UnknownLink",
    "properties": {
      "role": ["Unknown"],
      "subject": ["d412c23b95d0d42870ffac5a6d5f595cfb4af139"],
      "object": ["66f3136c08ce5635e6381fbfced0bb903244bf06"]
    }
  },
  {
    "id": "1de1f61bbf04e9e47c389234657a0d01fed9fc80",
    "schema": "UnknownLink",
    "properties": {
      "role": ["Unknown"],
      "subject": ["708c497d705d299ae116c13f3b721728b1cccaa6"],
      "object": ["66f3136c08ce5635e6381fbfced0bb903244bf06"]
    }
  },
  {"id": "3c7fb357a9039e176b9935d7bea88b405c89355d", "schema": "Company", "properties": {"name": ["ADOR MMC"]}},
  {
    "id": "e7918cf9567fc1453976a2f3336427a2cb98d0ca",
    "schema": "UnknownLink",
    "properties": {
      "role": ["Unknown"],
      "subject": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "object": ["3c7fb357a9039e176b9935d7bea88b405c89355d"]
    }
  },
  {
    "id": "b4323812c687ce60a03ad5711640eecd584151fc",
    "schema": "UnknownLink",
    "properties": {
      "role": ["Unknown"],
      "subject": ["d412c23b95d0d42870ffac5a6d5f595cfb4af139"],
      "object": ["3c7fb357a9039e176b9935d7bea88b405c89355d"]
    }
  },
  {
    "id": "5a743d0e73e12a5908fc2646c3c0195c4cabef74",
    "schema": "UnknownLink",
    "properties": {
      "role": ["Unknown"],
      "subject": ["0453af3e8bdde2e0d279166387c3e172a0edca13"],
      "object": ["3c7fb357a9039e176b9935d7bea88b405c89355d"]
    }
  },
  {"id": "8fe16b199ccfdd8d199a7bbb1eefa60b2e619ceb", "schema": "Company", "properties": {"name": ["Express Bank"]}},
  {
    "id": "a40b7ed8d2f3cf3390a1cdf0a461680bc282fd70",
    "schema": "UnknownLink",
    "properties": {
      "role": ["Registered at same address"],
      "subject": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "object": ["8fe16b199ccfdd8d199a7bbb1eefa60b2e619ceb"]
    }
  },
  {
    "id": "baa5254edd02f387a405e305c58028a679d510eb",
    "schema": "UnknownLink",
    "properties": {
      "role": ["Registered at same address"],
      "subject": ["d412c23b95d0d42870ffac5a6d5f595cfb4af139"],
      "object": ["8fe16b199ccfdd8d199a7bbb1eefa60b2e619ceb"]
    }
  },
  {
    "id": "0ebc37da9d5f641a0f2a819e04dc107a51c121ce",
    "schema": "UnknownLink",
    "properties": {
      "role": ["Registered at same address"],
      "subject": ["0453af3e8bdde2e0d279166387c3e172a0edca13"],
      "object": ["8fe16b199ccfdd8d199a7bbb1eefa60b2e619ceb"]
    }
  },
  {
    "id": "9ed3110264fcedc9bf7ba48a54f7dd32f156316f",
    "schema": "UnknownLink",
    "properties": {
      "role": ["unknown"],
      "subject": ["d412c23b95d0d42870ffac5a6d5f595cfb4af139"],
      "object": ["b0bdee309a472f6ffca19cb7144f3c06ac41752c"]
    }
  },
  {
    "id": "8d7518868b6041c0bba97971a2650bd0cbf2cd19",
    "schema": "UnknownLink",
    "properties": {
      "role": ["unknown"],
      "subject": ["0453af3e8bdde2e0d279166387c3e172a0edca13"],
      "object": ["b0bdee309a472f6ffca19cb7144f3c06ac41752c"]
    }
  },
  {"id": "36062596fa4d83e98370e61c23639502dedb5882", "schema": "Company", "properties": {"name": ["The Farimont"]}},
  {
    "id": "efc923b3ca0a1dd3290532b334e9662db20c1601",
    "schema": "UnknownLink",
    "properties": {
      "role": ["Indirect Relationship"],
      "subject": ["a32c435fa20357c1a842df5a2245a856d8f3945d"],
      "object": ["36062596fa4d83e98370e61c23639502dedb5882"]
    }
  },
  {
    "id": "e5386f3393799d87dab7d5ea1030a42d87bd539a",
    "schema": "Company",
    "properties": {"name": ["Greenock Management Corp"]}
  },
  {
    "id": "29a3dbbad3184526b7eeb27018f003730990264b",
    "schema": "Membership",
    "properties": {
      "role": ["Treasurer"],
      "member": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "organization": ["e5386f3393799d87dab7d5ea1030a42d87bd539a"]
    }
  },
  {
    "id": "e129ad16cd16a5be5d5de6b148194472e339213d",
    "schema": "Membership",
    "properties": {
      "role": ["President"],
      "member": ["d412c23b95d0d42870ffac5a6d5f595cfb4af139"],
      "organization": ["e5386f3393799d87dab7d5ea1030a42d87bd539a"]
    }
  },
  {
    "id": "48214ff35c8c59574bdb95914853070c0d9ab8e9",
    "schema": "Membership",
    "properties": {
      "role": ["Secretary"],
      "member": ["fa02de2d07a1062c7da8187e831010086de8c377"],
      "organization": ["e5386f3393799d87dab7d5ea1030a42d87bd539a"]
    }
  },
  {
    "id": "a6efc7229354948b31eecad265e77bf5f5b5597c",
    "schema": "Membership",
    "properties": {
      "startDate": ["2006-08-11"],
      "role": ["President"],
      "member": ["d412c23b95d0d42870ffac5a6d5f595cfb4af139"],
      "organization": ["eb6a68903763f4cbd40f291aa1bf8a41b224b5ee"]
    }
  },
  {
    "id": "5fd32aacd4aec96473260b969433acc19141a74a",
    "schema": "Membership",
    "properties": {
      "startDate": ["2012-06-01"],
      "role": ["Secretary"],
      "member": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "organization": ["eb6a68903763f4cbd40f291aa1bf8a41b224b5ee"]
    }
  },
  {
    "id": "cf3be68b2f102ba5fe05f5e8780fe0298664fe97",
    "schema": "Membership",
    "properties": {
      "startDate": ["2006-08-11"],
      "endDate": ["2012-06-01"],
      "role": ["Former Treasurer"],
      "member": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "organization": ["eb6a68903763f4cbd40f291aa1bf8a41b224b5ee"]
    }
  },
  {
    "id": "708ba0c38fd469d1c3e5e4f4aca313b085d94185",
    "schema": "Membership",
    "properties": {
      "startDate": ["2006-08-11"],
      "endDate": ["2012-06-01"],
      "role": ["Former Secretary"],
      "member": ["fa02de2d07a1062c7da8187e831010086de8c377"],
      "organization": ["eb6a68903763f4cbd40f291aa1bf8a41b224b5ee"]
    }
  },
  {
    "id": "babe7f760e203b50236550783dd1edc8a14fecc1",
    "schema": "Membership",
    "properties": {
      "startDate": ["2006-08-11"],
      "role": ["President"],
      "member": ["d412c23b95d0d42870ffac5a6d5f595cfb4af139"],
      "organization": ["6534b7014a1da8d0c0d89600751a18ac32cfd1a8"]
    }
  },
  {
    "id": "60e0267381ef061fafc11599f428d09261d60e67",
    "schema": "Membership",
    "properties": {
      "role": ["Secretary"],
      "member": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "organization": ["6534b7014a1da8d0c0d89600751a18ac32cfd1a8"]
    }
  },
  {
    "id": "204cb413c7570f24b3b6425240e8ccdf48c4ee77",
    "schema": "Membership",
    "properties": {
      "startDate": ["2006-08-11"],
      "role": ["Former Treasurer"],
      "member": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "organization": ["6534b7014a1da8d0c0d89600751a18ac32cfd1a8"]
    }
  },
  {
    "id": "58b14c55f1824033adbb05a67cc6989de36e2bc4",
    "schema": "Membership",
    "properties": {
      "startDate": ["2006-08-11"],
      "role": ["Former Secretary"],
      "member": ["fa02de2d07a1062c7da8187e831010086de8c377"],
      "organization": ["6534b7014a1da8d0c0d89600751a18ac32cfd1a8"]
    }
  },
  {
    "id": "212dc30417c7823ac4f0f64c4de0af026d33c41d",
    "schema": "Membership",
    "properties": {
      "startDate": ["2006-08-14"],
      "role": ["President"],
      "member": ["d412c23b95d0d42870ffac5a6d5f595cfb4af139"],
      "organization": ["7b5b9d43e8ed2f2770f93560f4744d1da0b4e87f"]
    }
  },
  {
    "id": "08af9bd54af483f92962a34674d24002e71d6db2",
    "schema": "Membership",
    "properties": {
      "startDate": ["2006-08-14"],
      "role": ["Secretary"],
      "member": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "organization": ["7b5b9d43e8ed2f2770f93560f4744d1da0b4e87f"]
    }
  },
  {
    "id": "03e50078464d923413f41c589499ffbf83de172d",
    "schema": "Membership",
    "properties": {
      "startDate": ["2006-08-14"],
      "endDate": ["2012-06-01"],
      "role": ["Former Treasurer"],
      "member": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "organization": ["7b5b9d43e8ed2f2770f93560f4744d1da0b4e87f"]
    }
  },
  {
    "id": "3d88a6fdcff803b838f89789b2d89ef46e0a4c4c",
    "schema": "Membership",
    "properties": {
      "startDate": ["2006-08-14"],
      "endDate": ["2012-06-01"],
      "role": ["Former Secretary"],
      "member": ["fa02de2d07a1062c7da8187e831010086de8c377"],
      "organization": ["7b5b9d43e8ed2f2770f93560f4744d1da0b4e87f"]
    }
  },
  {
    "id": "07a0c90c07da001e0e5b1aa9c3b6d406d5679d4a",
    "schema": "Membership",
    "properties": {
      "startDate": ["2006-06-07"],
      "role": ["President"],
      "member": ["d412c23b95d0d42870ffac5a6d5f595cfb4af139"],
      "organization": ["b4df4dadb84cf9a0831e8e97f66260da78d4af4c"]
    }
  },
  {
    "id": "fb3546054aa93ccd9134c40649fe8267cb5b8866",
    "schema": "Membership",
    "properties": {
      "startDate": ["2006-06-07"],
      "role": ["Treasurer"],
      "member": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "organization": ["b4df4dadb84cf9a0831e8e97f66260da78d4af4c"]
    }
  },
  {
    "id": "00baa25d2b999a85ff74c2fbdb0fd4be49d76afe",
    "schema": "Membership",
    "properties": {
      "startDate": ["2006-06-07"],
      "endDate": ["2012-04-02"],
      "role": ["Former Secretary"],
      "member": ["fa02de2d07a1062c7da8187e831010086de8c377"],
      "organization": ["b4df4dadb84cf9a0831e8e97f66260da78d4af4c"]
    }
  },
  {
    "id": "069bb9936a15071e37c877643f60608cc4cca168",
    "schema": "Membership",
    "properties": {
      "startDate": ["2006-06-09"],
      "role": ["President"],
      "member": ["d412c23b95d0d42870ffac5a6d5f595cfb4af139"],
      "organization": ["cb33f5fbcbbe53f9c597c2dc1a382f7de903b1d5"]
    }
  },
  {
    "id": "a2a0fd89bfc562670c5df52a0289e42c3c675190",
    "schema": "Membership",
    "properties": {
      "startDate": ["2006-06-09"],
      "role": ["Treasurer"],
      "member": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "organization": ["cb33f5fbcbbe53f9c597c2dc1a382f7de903b1d5"]
    }
  },
  {
    "id": "33dba245ec9bb354b7b0eb36e725e2338afca538",
    "schema": "Membership",
    "properties": {
      "startDate": ["2006-06-09"],
      "endDate": ["2012-04-02"],
      "role": ["Former Secretary"],
      "member": ["fa02de2d07a1062c7da8187e831010086de8c377"],
      "organization": ["cb33f5fbcbbe53f9c597c2dc1a382f7de903b1d5"]
    }
  },
  {
    "id": "8f5b457a3d0617937f6625b549aee8aec8f2842d",
    "schema": "Membership",
    "properties": {
      "startDate": ["2006-07-28"],
      "role": ["President"],
      "member": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "organization": ["281104fd177fd38c35aa4b1ec72b9e8023f2c19a"]
    }
  },
  {
    "id": "0a75ac1e6c5f906da898064ecda859ac63309ac8",
    "schema": "Membership",
    "properties": {
      "startDate": ["2006-07-28"],
      "role": ["Treasurer"],
      "member": ["d412c23b95d0d42870ffac5a6d5f595cfb4af139"],
      "organization": ["281104fd177fd38c35aa4b1ec72b9e8023f2c19a"]
    }
  },
  {
    "id": "6e97b99efe42e6a667264c94f990754c17bf3dba",
    "schema": "Membership",
    "properties": {
      "startDate": ["2006-07-28"],
      "endDate": ["2012-04-02"],
      "role": ["Former Secretary"],
      "member": ["fa02de2d07a1062c7da8187e831010086de8c377"],
      "organization": ["281104fd177fd38c35aa4b1ec72b9e8023f2c19a"]
    }
  },
  {
    "id": "02ef6727aa9759559a14709d55953df3c3d3ba14",
    "schema": "Company",
    "properties": {"name": ["Dilsan Investments S.A."]}
  },
  {
    "id": "9fae9eab519d79697592a0da57f4631b92530382",
    "schema": "Membership",
    "properties": {
      "startDate": ["2005-04-11"],
      "role": ["Document Signatory"],
      "member": ["fa02de2d07a1062c7da8187e831010086de8c377"],
      "organization": ["02ef6727aa9759559a14709d55953df3c3d3ba14"]
    }
  },
  {"id": "52e0dc707e2490debe7b9cbb8598636cb1ea9c1c", "schema": "Company", "properties": {"name": ["Colville Group"]}},
  {
    "id": "5ec9ffe3c42bd2e0d90c254897297e7f3e9694de",
    "schema": "Membership",
    "properties": {
      "startDate": ["2005-09-12"],
      "role": ["Document Signatory"],
      "member": ["fa02de2d07a1062c7da8187e831010086de8c377"],
      "organization": ["52e0dc707e2490debe7b9cbb8598636cb1ea9c1c"]
    }
  },
  {
    "id": "c26f17d5a51cc1435f68e60f505fd0521b7abba8",
    "schema": "Membership",
    "properties": {
      "startDate": ["2005-07-20"],
      "role": ["President"],
      "member": ["0453af3e8bdde2e0d279166387c3e172a0edca13"],
      "organization": ["4f02b0c9eaa1e929063527adbdfb1138ffd5fc9b"]
    }
  },
  {"schema": "CourtCase",
    "urls": ["http://nazran.ing.sudrf.ru/modules.php?id=6600011203151240354061000148042&name=bsr&op=show_text&srv_num=1"],
    "updated_at": "2019-04-19T05:35:13.301254", "schemata": ["CourtCase", "Thing"],
    "name": "\u0413\u0440\u0430\u0436\u0434\u0430\u043d\u0441\u043a\u043e\u0435, \u041f\u0435\u0440\u0432\u0430\u044f \u0438\u043d\u0441\u0442\u0430\u043d\u0446\u0438\u044f, \u041f\u0440\u043e\u0447\u0438\u0435 \u0438\u0441\u043a\u043e\u0432\u044b\u0435 \u0434\u0435\u043b\u0430, \u0418\u0441\u043a (\u0437\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u0435) \u0443\u0434\u043e\u0432\u043b\u0435\u0442\u0432\u043e\u0440\u0435\u043d (\u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u0447\u0430\u0441\u0442\u0438\u0447\u043d\u043e)", "created_at": "2019-04-19T05:35:13.301254", "dates": ["2012-03-15"], "countries": ["ru"], "bulk": true, "properties": {
    "sourceUrl": ["http://nazran.ing.sudrf.ru/modules.php?id=6600011203151240354061000148042&name=bsr&op=show_text&srv_num=1"], "country": ["ru"], "name": ["\u0413\u0440\u0430\u0436\u0434\u0430\u043d\u0441\u043a\u043e\u0435, \u041f\u0435\u0440\u0432\u0430\u044f \u0438\u043d\u0441\u0442\u0430\u043d\u0446\u0438\u044f, \u041f\u0440\u043e\u0447\u0438\u0435 \u0438\u0441\u043a\u043e\u0432\u044b\u0435 \u0434\u0435\u043b\u0430, \u0418\u0441\u043a (\u0437\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u0435) \u0443\u0434\u043e\u0432\u043b\u0435\u0442\u0432\u043e\u0440\u0435\u043d (\u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u0447\u0430\u0441\u0442\u0438\u0447\u043d\u043e)"], "fileDate": ["2012-03-15"], "category": ["\u041f\u0440\u043e\u0447\u0438\u0435 \u0438\u0441\u043a\u043e\u0432\u044b\u0435 \u0434\u0435\u043b\u0430"], "type": ["\u0413\u0440\u0430\u0436\u0434\u0430\u043d\u0441\u043a\u043e\u0435, \u041f\u0435\u0440\u0432\u0430\u044f \u0438\u043d\u0441\u0442\u0430\u043d\u0446\u0438\u044f"], "court": ["\u041d\u0430\u0437\u0440\u0430\u043d\u043e\u0432\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d\u043d\u044b\u0439 \u0441\u0443\u0434 (\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0418\u043d\u0433\u0443\u0448\u0435\u0442\u0438\u044f), \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0418\u043d\u0433\u0443\u0448\u0435\u0442\u0438\u044f"], "status": ["\u0418\u0441\u043a (\u0437\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u0435) \u0443\u0434\u043e\u0432\u043b\u0435\u0442\u0432\u043e\u0440\u0435\u043d (\u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u0447\u0430\u0441\u0442\u0438\u0447\u043d\u043e)"]}, "id": "4f26101fd6f852da950a79f4cfc02c80a9da0507.4de74097d3d21d82dafec65e076867d6a600a6f7", "score": 1.0, "collection": {"created_at": "2018-10-19T16:07:24.303523", "updated_at": "2019-03-05T14:29:17.533897", "category": "court", "kind": "source", "id": "972", "collection_id": "972", "foreign_id": "ru_rospravosudie", "team_id": ["1719", "1757"], "label": "Russian Court Cases (\u0420\u043e\u0441\u041f\u0440\u0430\u0432\u043e\u0441\u0443\u0434\u0438\u0435, 2015)", "summary": "A now-defunct archive of Russian federal court cases including the case identification and the names of judges.", "publisher": "\u0420\u043e\u0441\u041f\u0440\u0430\u0432\u043e\u0441\u0443\u0434\u0438\u0435", "publisher_url": "http://rospravjmnxyxlu3.onion", "info_url": "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D0%9F%D1%80%D0%B0%D0%B2%D0%BE%D1%81%D1%83%D0%B4%D0%B8%D0%B5", "casefile": false, "secret": false, "count": 33375182, "schemata": {"CourtCase": 33312115, "Person": 63067}, "countries": ["ru"], "links": {"self": "https://data.occrp.org/api/2/collections/972", "xref": "https://data.occrp.org/api/2/collections/972/xref", "xref_csv": "https://data.occrp.org/api/2/collections/972/xref.csv", "reconcile": "https://data.occrp.org/api/2/collections/972/reconcile", "ui": "https://data.occrp.org/collections/972"}, "writeable": false}, "links": {"self": "https://data.occrp.org/api/2/entities/4f26101fd6f852da950a79f4cfc02c80a9da0507.4de74097d3d21d82dafec65e076867d6a600a6f7", "references": "https://data.occrp.org/api/2/entities/4f26101fd6f852da950a79f4cfc02c80a9da0507.4de74097d3d21d82dafec65e076867d6a600a6f7/references", "tags": "https://data.occrp.org/api/2/entities/4f26101fd6f852da950a79f4cfc02c80a9da0507.4de74097d3d21d82dafec65e076867d6a600a6f7/tags", "ui": "https://data.occrp.org/entities/4f26101fd6f852da950a79f4cfc02c80a9da0507.4de74097d3d21d82dafec65e076867d6a600a6f7"}, "writeable": false},
  {
    "id": "84a91b77941a2502cf8766551035bcf4d68278a7",
    "schema": "Membership",
    "properties": {
      "startDate": ["2005-07-20"],
      "role": ["Treasurer"],
      "member": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "organization": ["4f02b0c9eaa1e929063527adbdfb1138ffd5fc9b"]
    }
  },
  {
    "id": "91f6adf96d49387f59778d724a90d05db6ee650e",
    "schema": "Membership",
    "properties": {
      "startDate": ["2005-07-20"],
      "role": ["Secertary"],
      "member": ["d412c23b95d0d42870ffac5a6d5f595cfb4af139"],
      "organization": ["4f02b0c9eaa1e929063527adbdfb1138ffd5fc9b"]
    }
  },
  {
    "id": "47b73abc9dd57c83c3ae65cd70dc48541b15a1e3",
    "schema": "Person",
    "properties": {"name": ["Mir Jamal Pashayev"]}
  },
  {
    "id": "7a93f82ca3dca70349f92306ebaccfa9559c12d8",
    "schema": "Membership",
    "properties": {
      "startDate": ["2007-12"],
      "role": ["President"],
      "member": ["47b73abc9dd57c83c3ae65cd70dc48541b15a1e3"],
      "organization": ["ece24fe1a5b440b02ddca13548d8a0682c084d2e"]
    }
  },
  {
    "id": "6cf8313dbeedf52e4d51e6bb82f13c281192ac37",
    "schema": "Membership",
    "properties": {
      "role": ["President"],
      "member": ["0453af3e8bdde2e0d279166387c3e172a0edca13"],
      "organization": ["e35ef319eb04492c489250cfc3f77be6fa2a3ef8"]
    }
  },
  {
    "id": "cd9351e8bafa7b4d8eef2d1ea9cc7251c4d5476e",
    "schema": "Membership",
    "properties": {
      "role": ["Treasurer"],
      "member": ["5e45bde2c2e109391ae1f9049f487077078de3bf"],
      "organization": ["e35ef319eb04492c489250cfc3f77be6fa2a3ef8"]
    }
  },
  {
    "id": "2b0b8b11e470ccf0d7e886386b835f9709f4f555",
    "schema": "Membership",
    "properties": {
      "role": ["Secretary"],
      "member": ["d412c23b95d0d42870ffac5a6d5f595cfb4af139"],
      "organization": ["e35ef319eb04492c489250cfc3f77be6fa2a3ef8"]
    }
  },
  {"id": "57e8c4b3d272864dc87f292b7d6fbe81f2bb094e", "schema": "Company", "properties": {"name": ["Globex"]}},
  {
    "id": "2a5d6563c6ce13cc27e983ee8856d99692d11e80",
    "schema": "Ownership",
    "properties": {
      "percentage": ["33.00%"],
      "owner": ["57e8c4b3d272864dc87f292b7d6fbe81f2bb094e"],
      "asset": ["eb6a68903763f4cbd40f291aa1bf8a41b224b5ee"],
      "role": ["Ownership"]
    }
  },
  {
    "id": "0c6d864755cad35587cdf0d085fba9506ef4b102",
    "schema": "Ownership",
    "properties": {
      "percentage": ["33.00%"],
      "owner": ["57e8c4b3d272864dc87f292b7d6fbe81f2bb094e"],
      "asset": ["6534b7014a1da8d0c0d89600751a18ac32cfd1a8"],
      "role": ["Ownership"]
    }
  },
  {
    "id": "a2f64812db9ec0b279a5344e6c56b2c4915d8c3e",
    "schema": "Ownership",
    "properties": {
      "percentage": ["33.00%"],
      "owner": ["57e8c4b3d272864dc87f292b7d6fbe81f2bb094e"],
      "asset": ["7b5b9d43e8ed2f2770f93560f4744d1da0b4e87f"],
      "role": ["Ownership"]
    }
  },
  {
    "id": "435c866265641af11e58aea22e198b89fa89fe1e",
    "schema": "Ownership",
    "properties": {
      "percentage": ["11.00%"],
      "owner": ["b0bdee309a472f6ffca19cb7144f3c06ac41752c"],
      "asset": ["57e8c4b3d272864dc87f292b7d6fbe81f2bb094e"],
      "role": ["Ownership"]
    }
  },
  {
    "id": "33780d82f22f856d6b68fecb3e8d56a559efda20",
    "schema": "Ownership",
    "properties": {
      "percentage": ["24.00%"],
      "owner": ["251e80661ad58a75f0048c629e101d1fca99e7ed"],
      "asset": ["b4df4dadb84cf9a0831e8e97f66260da78d4af4c"],
      "role": ["Ownership"]
    }
  },
  {
    "id": "6759942d6bfea2e7b0227139f118325a580c3c73",
    "schema": "Ownership",
    "properties": {
      "percentage": ["24.00%"],
      "owner": ["251e80661ad58a75f0048c629e101d1fca99e7ed"],
      "asset": ["cb33f5fbcbbe53f9c597c2dc1a382f7de903b1d5"],
      "role": ["Ownership"]
    }
  },
  {
    "id": "62443580de895c645d7b3aa48c330b90024ef4f8",
    "schema": "Ownership",
    "properties": {
      "percentage": ["24.00%"],
      "owner": ["251e80661ad58a75f0048c629e101d1fca99e7ed"],
      "asset": ["281104fd177fd38c35aa4b1ec72b9e8023f2c19a"],
      "role": ["Ownership"]
    }
  },
  {
    "id": "5b65df4b30062f1f4aa438d85919661f9dd24d84",
    "schema": "Ownership",
    "properties": {
      "percentage": ["70.00%"],
      "owner": ["7ce99c16990557f8a859a6c6ab080dc8cf1e1506"],
      "asset": ["3c7fb357a9039e176b9935d7bea88b405c89355d"],
      "role": ["Ownership"]
    }
  },
  {
    "id": "adba9d58dd86a0a99d2c46a503044064b300cbf2",
    "schema": "Ownership",
    "properties": {
      "percentage": ["97.50%"],
      "owner": ["a7fe9d2eae2d88a80234c40f2daa65d854f0cd5b"],
      "asset": ["7ce99c16990557f8a859a6c6ab080dc8cf1e1506"],
      "role": ["Ownership"]
    }
  },
  {
    "id": "fa9b6d91fc9cca8ca35e86b99c21ce252fff95f1",
    "schema": "Ownership",
    "properties": {
      "percentage": ["60.00%"],
      "owner": ["dab53a38876608a678a97f76b649f58754330896"],
      "asset": ["ece24fe1a5b440b02ddca13548d8a0682c084d2e"],
      "role": ["Ownership"]
    }
  },
  {
    "id": "5be0a60e86ba044188198de9d3653ecd8392f4a7",
    "schema": "Ownership",
    "properties": {
      "percentage": ["30.00%"],
      "owner": ["dab53a38876608a678a97f76b649f58754330896"],
      "asset": ["3c7fb357a9039e176b9935d7bea88b405c89355d"],
      "role": ["Ownership"]
    }
  },
  {
    "id": "bcd82c74a38fcaf5fca8a52e8503cbfde8f6f78e",
    "schema": "Ownership",
    "properties": {
      "percentage": ["48.99%"],
      "owner": ["e459190362658e88cb4301382cfb1bb3553f95ca"],
      "asset": ["66f3136c08ce5635e6381fbfced0bb903244bf06"],
      "role": ["Ownership"]
    }
  },
  {
    "id": "10c1dc2065161e05f373eefdf0e7d4761416993b",
    "schema": "Ownership",
    "properties": {
      "percentage": ["99.87%"],
      "owner": ["927419b14549202a9d85bdd0607de874a74d99be"],
      "asset": ["ece24fe1a5b440b02ddca13548d8a0682c084d2e"],
      "role": ["Ownership"]
    }
  },
  {
    "id": "858a85df649b4e11d3c31dcf399d3aa375a6a374",
    "schema": "Ownership",
    "properties": {
      "percentage": ["42.00%"],
      "owner": ["8fe16b199ccfdd8d199a7bbb1eefa60b2e619ceb"],
      "asset": ["3c7fb357a9039e176b9935d7bea88b405c89355d"],
      "role": ["Ownership"]
    }
  },
  {
    "id": "2671297ed7a7d5096adc650c68a041740f89001f",
    "schema": "Ownership",
    "properties": {
      "percentage": ["51.00%"],
      "owner": ["66f3136c08ce5635e6381fbfced0bb903244bf06"],
      "asset": ["b4df4dadb84cf9a0831e8e97f66260da78d4af4c"],
      "role": ["Ownership"]
    }
  },
  {
    "id": "41be571fa9057ddf19f82cc0348c7faf08edf744",
    "schema": "Ownership",
    "properties": {
      "percentage": ["76%"],
      "owner": ["4122b582e02027180a8085ca0bb29a6b39fa5978"],
      "asset": ["66f3136c08ce5635e6381fbfced0bb903244bf06"],
      "role": ["Ownership"]
    }
  },
  {"id": "ea3512f2d07c4066220a166ef92e8a00fbef5b46", "schema": "Company", "properties": {"name": ["Cenay Ilteshim"]}},
  {"id": "25b6064425b23b38f4ef45a579b28bf624f65095", "schema": "Company", "properties": {"name": ["Azrcell"]}},
  {
    "id": "c0002a012fa62951ffa6a430aaab52c1609668ac",
    "schema": "Ownership",
    "properties": {
      "percentage": ["49.00%"],
      "startDate": ["1996"],
      "owner": ["25b6064425b23b38f4ef45a579b28bf624f65095"],
      "asset": ["ea3512f2d07c4066220a166ef92e8a00fbef5b46"],
      "role": ["Ownership"]
    }
  },
  {"id": "aa22610a7e3ac09249589696390b4508bcf744e3", "schema": "Company", "properties": {"name": ["Azertel"]}},
  {
    "id": "9c1e2406859e312ebfc536c2caa4ad609010d2d4",
    "schema": "Ownership",
    "properties": {
      "percentage": ["64.30%"],
      "startDate": ["2008"],
      "owner": ["25b6064425b23b38f4ef45a579b28bf624f65095"],
      "asset": ["aa22610a7e3ac09249589696390b4508bcf744e3"],
      "role": ["Ownership"]
    }
  },
  {
    "id": "7b65691929a8c95587ff009407281de4f40fffa9",
    "schema": "Ownership",
    "properties": {
      "percentage": ["100.00%"],
      "owner": ["1c015b58d72cca858067b037d86348f36f961f25"],
      "asset": ["ece24fe1a5b440b02ddca13548d8a0682c084d2e"],
      "role": ["Ownership"]
    }
  },
  {
    "id": "cf8113046906e386ada4eade3f9e56b5be958505",
    "schema": "Ownership",
    "properties": {
      "percentage": ["100.00%"],
      "owner": ["7ce99c16990557f8a859a6c6ab080dc8cf1e1506"],
      "asset": ["ece24fe1a5b440b02ddca13548d8a0682c084d2e"],
      "role": ["Ownership"]
    }
  },
  {
    "id": "89cfd90e946fec3691c39810fff11f56d4c3f356",
    "schema": "Company",
    "properties": {"name": ["Exmont Resources"]}
  },
  {
    "id": "4ae9363211e46abd8eee28495ec0a456b2126d2b",
    "schema": "Membership",
    "properties": {
      "member": ["89cfd90e946fec3691c39810fff11f56d4c3f356"],
      "organization": ["eb6a68903763f4cbd40f291aa1bf8a41b224b5ee"],
      "role": ["Treasurer"]
    }
  },
  {
    "id": "a6782b94b37ca6dd18f0597f90db494706d6075b",
    "schema": "Membership",
    "properties": {
      "member": ["89cfd90e946fec3691c39810fff11f56d4c3f356"],
      "organization": ["6534b7014a1da8d0c0d89600751a18ac32cfd1a8"],
      "role": ["Treasurer"]
    }
  },
  {
    "id": "dcad0264e793a9c11ceb426350f6b3783b511b55",
    "schema": "Membership",
    "properties": {
      "member": ["89cfd90e946fec3691c39810fff11f56d4c3f356"],
      "organization": ["7b5b9d43e8ed2f2770f93560f4744d1da0b4e87f"],
      "role": ["Treasurer"]
    }
  },
  {
    "id": "6f2bd8d7721e572ab4e0a0751de30e551d376bac",
    "schema": "Company",
    "properties": {"name": ["Comset Management"]}
  },
  {
    "id": "bf9f386c36b863b9a8871c262f6c0fa1b39577dd",
    "schema": "Membership",
    "properties": {
      "member": ["6f2bd8d7721e572ab4e0a0751de30e551d376bac"],
      "organization": ["b4df4dadb84cf9a0831e8e97f66260da78d4af4c"],
      "role": ["Secretary"]
    }
  },
  {
    "id": "16dc3323a21480f8292a2f13788e5cf8a45415f3",
    "schema": "Membership",
    "properties": {
      "member": ["6f2bd8d7721e572ab4e0a0751de30e551d376bac"],
      "organization": ["cb33f5fbcbbe53f9c597c2dc1a382f7de903b1d5"],
      "role": ["Secretary"]
    }
  },
  {
    "id": "025fc42ed5ab8b55df1d97cdc4e855e71cb3ed50",
    "schema": "Membership",
    "properties": {
      "member": ["6f2bd8d7721e572ab4e0a0751de30e551d376bac"],
      "organization": ["281104fd177fd38c35aa4b1ec72b9e8023f2c19a"],
      "role": ["Secretary"]
    }
  },
  {
    "id": "1828f8414067d50d399e2fda00fbce3ab33a5477",
    "schema": "UnknownLink",
    "properties": {
      "subject": ["52e0dc707e2490debe7b9cbb8598636cb1ea9c1c"],
      "object": ["ea3512f2d07c4066220a166ef92e8a00fbef5b46"]
    }
  },
  {
    "id": "75cbaf0dd10e7ac35a6c3c6247583c54668ee27d",
    "schema": "UnknownLink",
    "properties": {
      "subject": ["02ef6727aa9759559a14709d55953df3c3d3ba14"],
      "object": ["ea3512f2d07c4066220a166ef92e8a00fbef5b46"]
    }
  },
  {
    "id": "509b8ffebd9eee84d5734db1aa9fe24617d3d4c2",
    "schema": "UnknownLink",
    "properties": {
      "startDate": ["1996"],
      "subject": ["ea3512f2d07c4066220a166ef92e8a00fbef5b46"],
      "object": ["aa22610a7e3ac09249589696390b4508bcf744e3"]
    }
  },
  {
    "id": "31ecbf6a05f78ac0a443307f523b57f47d206554",
    "schema": "UnknownLink",
    "properties": {
      "startDate": ["1996"],
      "subject": ["e35ef319eb04492c489250cfc3f77be6fa2a3ef8"],
      "object": ["aa22610a7e3ac09249589696390b4508bcf744e3"]
    }
  },
  {
    "id": "4a8a37509a20f18273fdbe8a6343319eae6d1c18",
    "schema": "UnknownLink",
    "properties": {
      "subject": ["ece24fe1a5b440b02ddca13548d8a0682c084d2e"],
      "object": ["a7fe9d2eae2d88a80234c40f2daa65d854f0cd5b"]
    }
  },
  {
    "id": "0705e286ab1aa8fddb8e8e3b13abf814200e73c2",
    "schema": "UnknownLink",
    "properties": {
      "subject": ["a7fe9d2eae2d88a80234c40f2daa65d854f0cd5b"],
      "object": ["668827f4b37fa8734552899db0064cf050798775"]
    }
  },
  {
    "id": "a272654a559bd5d07e5bf952d65b8487c1a412b1",
    "schema": "UnknownLink",
    "properties": {
      "subject": ["a7fe9d2eae2d88a80234c40f2daa65d854f0cd5b"],
      "object": ["4aff7f93dc552f022badf36341046178d9074d07"]
    }
  },
  {
    "id": "1fc4bd2e94ac313df36382663e545ab7e0eb44e5",
    "schema": "UnknownLink",
    "properties": {
      "subject": ["a7fe9d2eae2d88a80234c40f2daa65d854f0cd5b"],
      "object": ["b647d3196e5f65a92c8de26bd79b5466fa9c0483"]
    }
  },
  {
    "id": "f11a30ec6ca5104d0a4a57c383c51f52116db88f",
    "schema": "UnknownLink",
    "properties": {
      "subject": ["a7fe9d2eae2d88a80234c40f2daa65d854f0cd5b"],
      "object": ["59bdf887ebd14f45b1dcce78c56245a5412616e2"]
    }
  },
  {
    "id": "1e5752aacf137f65d6ecb799d8f7487e0859fe29",
    "schema": "UnknownLink",
    "properties": {
      "subject": ["a7fe9d2eae2d88a80234c40f2daa65d854f0cd5b"],
      "object": ["28cb7a09ba49761e2ccd51137ff9d535219d0b58"]
    }
  },
  {
    "id": "82e0f969d304eb8c1c4284913b71334ce4a6f647",
    "schema": "UnknownLink",
    "properties": {
      "subject": ["a7fe9d2eae2d88a80234c40f2daa65d854f0cd5b"],
      "object": ["77d34220d673d9f9a264f4c22869cf67fd159db4"]
    }
  }
]
