const app = require('../app');
const chai = require('chai');
const mocha = require('mocha');
const chaiHttp = require('chai-http');
const {expect} = chai;
const {describe} = mocha;
const CONFIG = require('../configs/ps4API');
const server = require('../routes/ps4');


chai.use(chaiHttp);

describe('News API', () => {
    it('should return undefined message', function (done) {
        chai.request(app)
            .get('/ps4')
            .end((err, res) => {
                expect(res.body.message).to.equals(undefined);
                done();
            })
    });
    it('should return 200 success code', function (done) {
        chai.request(app)
            .post('/ps4')
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            })
    });
    it('should return 404 error code', function (done) {
        chai.request(app)
            .get('/ps4')
            .end((err, res) => {
                expect(res).to.have.status(404);
                done();
            })
    });
    it('Should respond with error because no input was submitted', (done) => {
        const apiCall = {
            url: CONFIG.url + '?q=' + 'school' + CONFIG.key
        };
        chai.request(server)
            .post('/ps4')
            .send(apiCall)
            .end((err, response) => {
                response.body.should.be.a('err')
            })
        done();
    })
})
