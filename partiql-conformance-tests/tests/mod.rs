use partiql_parser::ParserResult;

#[track_caller]
#[inline]
pub(crate) fn parse(statement: &str) -> ParserResult {
    partiql_parser::Parser::default().parse(statement)
}

#[track_caller]
#[inline]
pub(crate) fn fail_syntax(statement: &str) {
    let res = parse(statement);
    assert!(
        res.is_err(),
        "For `{}`, expected `Err(_)`, but was `{:#?}`",
        statement,
        res
    );
}

#[track_caller]
#[inline]
pub(crate) fn pass_syntax(statement: &str) {
    let res = parse(statement);
    assert!(
        res.is_ok(),
        "For `{}`, expected `Ok(_)`, but was `{:#?}`",
        statement,
        res
    );
}

// The `partiql_tests` module will be generated by `build.rs` build script.
#[cfg(feature = "conformance_test")]
mod partiql_tests;
