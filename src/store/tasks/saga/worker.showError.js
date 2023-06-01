import { put, delay } from 'redux-saga/effects'
import { setError } from '../actions'

export default function* showError({ payload }) {
  yield put(setError(payload))
  yield delay(5000)
  yield put(setError(''))
}
