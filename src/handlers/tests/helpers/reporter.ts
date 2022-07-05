/* Codigo de configuración standar de Jasmine
  https://github.com/bcaudan/jasmine-spec-reporter/tree/master/examples/typescript
*/

import { DisplayProcessor, SpecReporter, StacktraceOption } from 'jasmine-spec-reporter'
import JasmineStartedInfo = jasmine.JasmineStartedInfo
import CustomReporter = jasmine.CustomReporter;
 
class CustomProcessor extends DisplayProcessor {
  public displayJasmineStarted(info: JasmineStartedInfo, log: string): string {
    return `TypeScript ${log}`
  }
}
 
jasmine.getEnv().clearReporters()
jasmine.getEnv().addReporter(
  new SpecReporter({
        spec: {
            displayStacktrace: StacktraceOption.NONE,
        },
        customProcessors: [CustomProcessor],
    }) as unknown as CustomReporter
);
