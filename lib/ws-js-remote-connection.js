/*
 *  Licensed to the Apache Software Foundation (ASF) under one
 *  or more contributor license agreements.  See the NOTICE file
 *  distributed with this work for additional information
 *  regarding copyright ownership.  The ASF licenses this file
 *  to you under the Apache License, Version 2.0 (the
 *  "License"); you may not use this file except in compliance
 *  with the License.  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing,
 *  software distributed under the License is distributed on an
 *  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 *  KIND, either express or implied.  See the License for the
 *  specific language governing permissions and limitations
 *  under the License.
 */

/**
 * @author Dzmitry Sushko
 */
'use strict';

const DriverRemoteConnection = require('gremlin/lib/driver/driver-remote-connection');
const WsJsClient = require('./client');

/**
 * Represents the default {@link RemoteConnection} implementation.
 */
class WsJsDriverRemoteConnection extends DriverRemoteConnection {

  /**
   * Creates a new instance of {@link DriverRemoteConnection}.
   * @param {String} url The resource uri.
   * @param {Object} [options] The connection options.
   * @param {GraphSONReader} [options.reader] The reader to use.
   * @param {String} [options.traversalSource] The traversal source. Defaults to: 'g'.
   * @param {GraphSONWriter} [options.writer] The writer to use.
   * @param {Authenticator} [options.authenticator] The authentication handler to use.
   * @param {Array} [options.protocols] List of sub-protocols for websocket
   * @constructor
   */
  constructor(url, options) {
    options = options || {};
    let isConnectOnStartUp = options.connectOnStartup || true;
    options.connectOnStartup = false;
    super(url, options);

    options.connectOnStartup = isConnectOnStartUp;
    this._client = new WsJsClient(url, options);
  }
}

module.exports = WsJsDriverRemoteConnection;
