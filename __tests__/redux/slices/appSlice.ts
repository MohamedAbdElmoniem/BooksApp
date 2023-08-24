import {setLoading} from '../../../src/redux/slices/appSlice';
import reducer from '../../../src/redux/slices/appSlice';

describe('app slice', () => {
  it('should handle setLoading', () => {
    const initialState = {
      loading: false,
    };
    const nextState = reducer(initialState, setLoading(true));
    expect(nextState.loading).toEqual(true);
  });

  it('should handle setLoading to false', () => {
    const initialState = {
      loading: true,
    };
    const nextState = reducer(initialState, setLoading(false));
    expect(nextState.loading).toEqual(false);
  });
});
