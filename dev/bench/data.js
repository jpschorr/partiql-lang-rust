window.BENCHMARK_DATA = {
  "lastUpdate": 1674079334154,
  "repoUrl": "https://github.com/jpschorr/partiql-lang-rust",
  "entries": {
    "PartiQL (rust) Benchmark": [
      {
        "commit": {
          "author": {
            "email": "joshps@amazon.com",
            "name": "Josh Pschorr",
            "username": "jpschorr"
          },
          "committer": {
            "email": "joshps@amazon.com",
            "name": "Josh Pschorr",
            "username": "jpschorr"
          },
          "distinct": true,
          "id": "c3c63aac6668ba576743410d6665e98f0e7b84cb",
          "message": "Disable bench attempts for lib/bin unittests",
          "timestamp": "2023-01-18T13:18:58-08:00",
          "tree_id": "365eaf805856675021c2eef370fe5ba14b1d8571",
          "url": "https://github.com/jpschorr/partiql-lang-rust/commit/c3c63aac6668ba576743410d6665e98f0e7b84cb"
        },
        "date": 1674078088236,
        "tool": "cargo",
        "benches": [
          {
            "name": "join",
            "value": 16847,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "simple",
            "value": 5264,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "simple-no",
            "value": 2313,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "numbers",
            "value": 106,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "parse-simple",
            "value": 858,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "parse-ion",
            "value": 2932,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "parse-group",
            "value": 9053,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "parse-complex",
            "value": 23467,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "parse-complex-fexpr",
            "value": 35551,
            "range": "± 156",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "joshps@amazon.com",
            "name": "Josh Pschorr",
            "username": "jpschorr"
          },
          "committer": {
            "email": "joshps@amazon.com",
            "name": "Josh Pschorr",
            "username": "jpschorr"
          },
          "distinct": true,
          "id": "5f91265eef5d3d3f88746a2bbf745425a50b4fbd",
          "message": "test to trigger bench",
          "timestamp": "2023-01-18T13:55:12-08:00",
          "tree_id": "365eaf805856675021c2eef370fe5ba14b1d8571",
          "url": "https://github.com/jpschorr/partiql-lang-rust/commit/5f91265eef5d3d3f88746a2bbf745425a50b4fbd"
        },
        "date": 1674079333092,
        "tool": "cargo",
        "benches": [
          {
            "name": "join",
            "value": 16648,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "simple",
            "value": 5161,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "simple-no",
            "value": 2190,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "numbers",
            "value": 106,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "parse-simple",
            "value": 885,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "parse-ion",
            "value": 3081,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "parse-group",
            "value": 9447,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "parse-complex",
            "value": 24443,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "parse-complex-fexpr",
            "value": 37304,
            "range": "± 139",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}