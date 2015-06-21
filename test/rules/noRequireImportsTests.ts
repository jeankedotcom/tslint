/*
 * Copyright 2013 Palantir Technologies, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

describe("<no-require-imports>", () => {
    it("forbids CommmonJS style imports", () => {
        const fileName = "rules/norequireimports.test.ts";
        const Rule = Lint.Test.getRule("no-require-imports");

        const actualFailures = Lint.Test.applyRuleOnFile(fileName, Rule);

        assert(actualFailures.length === 6, "Expected 6 failures, got " + actualFailures.length);
        const failure1 = Lint.Test.createFailuresOnFile(fileName, Rule.FAILURE_STRING)([1, 5], [1, 25]);
        const failure2 = Lint.Test.createFailuresOnFile(fileName, Rule.FAILURE_STRING)([3, 5], [3, 27]);
        const failure3 = Lint.Test.createFailuresOnFile(fileName, Rule.FAILURE_STRING)([11, 5], [11, 27]);
        const failure4 = Lint.Test.createFailuresOnFile(fileName, Rule.FAILURE_STRING)([12, 5], [12, 27]);
        const failure5 = Lint.Test.createFailuresOnFile(fileName, Rule.FAILURE_STRING)([15, 1], [15, 31]);
        const failure6 = Lint.Test.createFailuresOnFile(fileName, Rule.FAILURE_STRING)([17, 1], [17, 18]);

        Lint.Test.assertContainsFailure(actualFailures, failure1);
        Lint.Test.assertContainsFailure(actualFailures, failure2);
        Lint.Test.assertContainsFailure(actualFailures, failure3);
        Lint.Test.assertContainsFailure(actualFailures, failure4);
        Lint.Test.assertContainsFailure(actualFailures, failure5);
        Lint.Test.assertContainsFailure(actualFailures, failure6);
    });
});
