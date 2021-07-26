import { greet } from "./greet";

describe('greet', () => {

  it('should include name in return', () => {
    expect(greet('Angular')).toContain('Angular')
  })

})